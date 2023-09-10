import { Link } from 'react-router-dom'
import type { TCrumbProps } from './breadcrumbs.types'

export const Crumb = ({ item, className }: TCrumbProps) => {
  if (item.path === undefined)
    return <span className={className}>{item.name}</span>

  return (
    <Link to={item.path} key={item.name} className={`${className}`}>
      {item.name}
    </Link>
  )
}
