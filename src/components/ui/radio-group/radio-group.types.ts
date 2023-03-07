export type ValueLabel<T> = readonly {
  value: T
  label?: string
}[]
export type Value<T> = readonly T[]
export type Items<T> = ValueLabel<T> | Value<T>

export type Props<T> = {
  items: Items<T>
  defaultIndex?: number
  onClick: OnClick<T, HTMLButtonElement>
} & IProps
