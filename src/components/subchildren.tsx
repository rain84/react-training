import { memo } from 'react'

type Props = {
  prop?: number
  name: string
}

export const Subchildren = ({ name = '', prop }: Props) => {
  console.log(`${name}-Subchildren`)

  return (
    <p>
      {name} - Subchildren{prop ? `-prop:${prop}` : null}
    </p>
  )
}

// Subchildren.displayName = 'Subchildren'
