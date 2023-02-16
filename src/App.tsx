import { useEffect, useState } from 'react'

import { Parent1, Parent2, List, Subchildren } from 'components'
import './App.css'

function App() {
  const timer = 3000
  const [prop, setProp] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setProp(prop ? 0 : 1)
      console.log('\n')
    }, timer)
  }, [prop])

  console.log('App')

  return (
    <div className="App">
      <Parent1 prop={prop} name={'App'} list={<List name="App-Parent1" />}>
        <Subchildren name="App-Parent1" />
      </Parent1>
      <br />
      <Parent2 name={'App'} />
    </div>
  )
}

export default App
