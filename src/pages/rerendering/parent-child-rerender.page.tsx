import { useEffect, useRef } from 'react'
import {
  Parent1,
  Parent2,
  List,
  Subchildren,
  ChildrenWithSpreadingProps,
  ChildrenWithoutSpreadingProps,
  ReactMemo,
} from 'components'
import { useToggle } from 'hooks'

export const RerenderingPage = () => {
  const timer = 3000
  const [prop, toggle] = useToggle()
  const counter = useRef(0)

  useEffect(() => {
    // setInterval(toggle, timer)
  }, [prop])

  // console.log('Component RerenderingPage', counter.current++)

  return (
    <section data-prop={prop}>
      {/* <Parent1 prop={prop} name={'App'} list={<List name="App-Parent1" />}>
        <Subchildren name="App-Parent1" />
      </Parent1>
      <br />
      <Parent2 name={'App'} /> */}
      {/* <ChildrenWithSpreadingProps data-prop="prop" />
      <ChildrenWithoutSpreadingProps data-prop="prop" /> */}
      <ReactMemo />
    </section>
  )
}
