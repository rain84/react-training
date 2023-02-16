import { getData } from 'utils'

type Props = {
  prop?: number
  name: string
}

export const List = ({ name = '', prop = 1 }: Props) => {
  console.log(`${name}-LIST`)
  const data = getData()
  return (
    <>
      {data?.map((val) => {
        console.log(`${name}-LIST`)
        return <p key={val + prop.toString()}>{val}</p>
      })}
    </>
  )
}

// List.displayName = 'List'
