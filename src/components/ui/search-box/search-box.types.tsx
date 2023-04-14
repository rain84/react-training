import type { ChangeEvent } from 'react'

export type SearchBoxProps = {
  className?: string
  initialValue?: string
  items?: string[]

  id?: string
  name?: string
  autofocus?: boolean
  disabled?: boolean
  loading?: boolean

  onSelect?: (value: string) => void
  onChange?: (value: string) => void
}

export type ItemsProps = {
  items: string[]
  visible: boolean
  query: string
  index: number
}

export type OnChangeEvent = ChangeEvent<{
  value: string
}>

export type ItemProps = {
  val: string
  key: string
  query: string
  className: string
}
