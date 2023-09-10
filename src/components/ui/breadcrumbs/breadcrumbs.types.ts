export type TBreadcrumbsProps = {
  items?: TItem[]
}
export type TItem = { name: string; path?: string }

export type TCrumbProps = {
  className: string
  item: TItem
}

export type TDelimiterProps = {
  i: number
  className: string
  items: TItem[]
}
