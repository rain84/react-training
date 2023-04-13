import type { ItemsProps } from './search-box.types'
import { clsx } from 'clsx'

export const Items = ({ items, visible, query = '', index }: ItemsProps) => {
  if (!(visible && items.length)) return null
  return (
    <ul className="mt-1 px-2 py-1 border border-violet-700 rounded-sm w-40 shadow-2xl absolute z-10 bg-white">
      {items.map((val, i) => (
        <li key={val} className={clsx(isActive(i, index) && 'bg-slate-300')}>
          <>
            <strong>{val.slice(0, query.length)}</strong>
            {val.slice(query.length)}
          </>
        </li>
      ))}
    </ul>
  )
}

function isActive(i1: number, i2: number) {
  return i1 === i2
}
