import { memo } from 'react'

import { Subchildren } from '.'
import { getData } from '../utils'

const data = getData()

export const Children = memo(
  ({ prop, name }: { prop?: number; name: string }) => {
    console.log(`${name}-Children`)

    return (
      <>
        {data.map((val) => {
          console.log(`${name}-Children-list`)
          return <p key={val + prop}>{val}</p>
        })}
        <Subchildren name={`${name}-Children`} />
      </>
    )
  }
)

Children.displayName = 'Children'
