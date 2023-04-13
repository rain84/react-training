import type { ChangeEvent } from 'react'

export type SearchBoxProps = {
  className?: string
  initialValue?: string
  items: string[]

  id?: string
  name?: string
  autofocus?: boolean
  disabled?: boolean

  onSelect?: (value: string) => void
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
