export type ListProps = {
  prop?: number
  name: string
}

export type ParentProps = {
  prop?: boolean
  children?: React.ReactElement
  list?: React.ReactElement
  name?: string
}

export type SubchildrenProps = {
  prop?: number
  name: string
}

export type ChildrenProps = {
  prop?: number
  name: string
}

export type Layouts = 'Parent1' | 'Parent2' | 'Children1' | 'Children2'
