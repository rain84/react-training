import { useEffect } from 'react'
import { Parent1, Parent2, List, Subchildren } from 'components'
import { useToggle } from 'hooks'

export const RerenderingPage = () => {
  const timer = 3000
  const [prop, toggle] = useToggle()

  useEffect(() => {
    setInterval(toggle, timer)
  }, [prop])

  console.log('Component RerenderingPage')

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
