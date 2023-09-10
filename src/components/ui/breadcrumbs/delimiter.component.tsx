import type { TDelimiterProps } from './breadcrumbs.types'

export const Delimiter = ({ i, items, className }: TDelimiterProps) => {
  if (i === items.length - 1) return null
  return <span className={className}>/</span>
}
