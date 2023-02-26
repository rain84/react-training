import { memo } from 'react'
import { getData } from 'utils'
import { Subchildren } from '.'

const data = getData()
const { log } = console

export const Children = memo(
  ({ prop, name }: { prop?: number; name: string }) => {
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
  }
)
Children.displayName = 'Children'

export const ChildrenWithSpreadingProps = memo(({ ...props }) => {
  log('children_with_spreaded_props')
  return <p {...props}>children_with_spreaded_props</p>
})
Children.displayName = 'ChildrenWithoutSpreadingProps'

export const ChildrenWithoutSpreadingProps = memo(() => {
  log('children_without_spreaded_props')
  return <p>children_without_spreaded_props</p>
})
Children.displayName = 'ChildrenWithoutSpreadingProps'
