import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { getData } from 'utils'
import { useToggle } from 'hooks'
import type {
  ListProps,
  SubchildrenProps,
  ParentProps,
  ChildrenProps,
  Layouts,
} from './props-drilling.types'
import { Switch } from 'components/utils'
import { FRRG } from 'ui'

const data = getData()
const { log } = console

export const PropsDrilling = () => {
  const timer = 3000
  const [prop, toggle] = useToggle()
  const counter = useRef(0)

  useEffect(() => {
    setInterval(toggle, timer)
  }, [toggle])

  log('Component <PropsDrilling>', counter.current++)

  const [layout, setLayout] = useState<Layouts>('Parent1')
  const items = ['Parent1', 'Parent2', 'Children1', 'Children2'] as const
  const onClick: OnClick<Layouts> = useCallback(
    (e) => setLayout(e.target.value),
    []
  )

  return (
    <section data-prop={prop}>
      <span>PropsDrilling</span>

      <FRRG items={items} onClick={onClick} />

      <Switch
        Parent1={
          <Parent1 prop={prop} name="App" list={<List name="App-Parent1" />}>
            <Subchildren name="App-Parent1" />
          </Parent1>
        }
        Parent2={<Parent2 name="App" />}
        Children1={<ChildrenWithSpreadingProps data-prop="prop" />}
        Children2={<ChildrenWithoutSpreadingProps data-prop="prop" />}
      >
        {layout}
      </Switch>
    </section>
  )
}

const Parent1 = memo(({ prop, name, children, list }: ParentProps) => {
  log(`${name}-Parent-1`)
  return (
    <>
      <p>Parent1</p>

      {children}

      <p>prop{prop}</p>
      {data.map((val) => {
        log(`${name}-Parent1-list`)
        return <p key={val}>{val}</p>
      })}
      {list}
    </>
  )
})
Parent1.displayName = 'Parent1'

const Children = memo(({ prop, name }: ChildrenProps) => {
  log(`${name}-Children`)

  return (
    <>
      {data.map((val) => {
        log(`${name}-Children-list`)
        return <p key={val + prop}>{val}</p>
      })}
      <Subchildren name={`${name}-Children`} />
    </>
  )
})
Children.displayName = 'Children'

const ChildrenWithSpreadingProps = memo(({ ...props }) => {
  log('children_with_spreaded_props')
  return <p {...props}>children_with_spreaded_props</p>
})
Children.displayName = 'ChildrenWithoutSpreadingProps'

const ChildrenWithoutSpreadingProps = memo(() => {
  log('children_without_spreaded_props')
  return <p>children_without_spreaded_props</p>
})
Children.displayName = 'ChildrenWithoutSpreadingProps'

const List = ({ name = '', prop = 1 }: ListProps) => {
  log(`${name}-LIST`)
  return (
    <>
      {data?.map((val) => {
        log(`${name}-LIST`)
        return <p key={val + prop.toString()}>{val}</p>
      })}
    </>
  )
}
List.displayName = 'List'

const Parent2 = memo(({ prop, children, name }: ParentProps) => {
  log(`${name}-Parent2`)

  return (
    <>
      <p>Parent2</p>
      <Children name={`${name}-Parent2`} />
    </>
  )
})
Parent2.displayName = 'Parent2'

const Subchildren = ({ name = '', prop }: SubchildrenProps) => {
  log(`${name}-Subchildren`)

  return (
    <p>
      {name} - Subchildren{prop ? `-prop:${prop}` : null}
    </p>
  )
}
Subchildren.displayName = 'Subchildren'
