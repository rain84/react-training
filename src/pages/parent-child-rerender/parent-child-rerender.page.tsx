import { useEffect, useState } from 'react'
import { Parent1, Parent2, List, Subchildren } from 'components'

export const ParentChildRerenderPage = () => {
  const timer = 3000
  const [prop, setProp] = useState(0)

  // useEffect(() => {
  //   setInterval(() => {
  //     setProp(prop ? 0 : 1)
  //     console.log('\n')
  //   }, timer)
  // }, [prop])

  // console.log('ParentChildRerender')

  return (
    <section>
      <Parent1 prop={prop} name={'App'} list={<List name="App-Parent1" />}>
        <Subchildren name="App-Parent1" />
      </Parent1>
      <br />
      <Parent2 name={'App'} />
    </section>
  )
}
