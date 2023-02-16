import { Link } from 'react-router-dom'
import { Icon } from './icon'
import { Badge } from './badge'

type Props = {
  to?: string
  children: string
  count?: number
}

export const Item = ({ to, count, children }: Props) => {
  return (
    <Link
      to={to ?? ''}
      // not active
      // className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
      className="flex items-center focus:outline-none focus:ring-2 focus:ring-white justify-between w-full"
    >
      <span className="text-sm ml-2 flex">
        {/* <Icon className="mr-1" /> */}
        {children}
      </span>
      {/* <Badge>{count}</Badge> */}
    </Link>
  )
}
