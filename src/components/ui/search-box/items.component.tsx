import type { ItemsProps } from './search-box.types'
import { clsx } from 'clsx'

export const Items = ({ items, visible, query = '', index }: ItemsProps) => {
  if (!(visible && items.length)) return null
  console.clear()
  return (
    <ul className="mt-1 px-2 py-1 border border-violet-700 rounded-sm w-40 shadow-2xl absolute z-10 bg-white">
      {items.map((val, i) => (
        <Item
          key={val}
          val={val}
          className={clsx(isActive(i, index) && 'bg-slate-300')}
          query={query}
        />
      ))}
    </ul>
  )
}

type ItemProps = {
  val: string
  key: string
  query: string
  className: string
}
function Item({ val, query, className }: ItemProps) {
  const i = val.toLowerCase().indexOf(query)
  const left = val.slice(0, i)
  const right = val.slice(i + query.length)

  return (
    <li className={className}>
      {left}
      <strong>{query}</strong>
      {right}
    </li>
  )
}

function isActive(i1: number, i2: number) {
  return i1 === i2
}
