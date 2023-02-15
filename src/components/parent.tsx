import { memo } from 'react'

import { Children, Subchildren, List } from '.'
import { getData } from '../utils'

type Props = {
  prop?: number
  children?: React.ReactElement
  list?: React.ReactElement
  name?: string
}

const data = getData()

export const Parent1 = memo(({ prop, name, children, list }: Props) => {
  console.log(`${name}-Parent-1`)

  return (
    <>
      <p>Parent1 Parent1 Parent1 Parent1 Parent1 Parent1 Parent1</p>

      {children}

      <p>prop{prop}</p>
      {/* {data.map((val) => {
        console.log(`${name}-Parent1-list`)
        return <p key={val}>{val}</p>
      })} */}
      {list}
    </>
  )
})

Parent1.displayName = 'Parent1'

export const Parent2 = memo(({ prop, children, name }: Props) => {
  console.log(`${name}-Parent2`)

  return (
    <>
      <p>Parent2 Parent2 Parent2 Parent2 Parent2 Parent2 Parent2 </p>
      <Children name={`${name}-Parent2`} />
    </>
  )
})

Parent2.displayName = 'Parent2'
