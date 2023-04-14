import { useState, useRef, useEffect } from 'react'
import type { KeyboardEventHandler } from 'react'
import debounce from 'lodash/debounce'
import clsx from 'clsx'
import { Items, Loading } from './items.component'
import type { OnChangeEvent, SearchBoxProps } from './search-box.types'
import { Switch } from 'components/utils'

const INPUT_DELAY = 200

export const SearchBox = ({
  className,
  items = [],
  initialValue = '',
  id = '',
  name = '',
  autofocus = false,
  disabled = false,
  loading = false,

  onSelect,
  onChange: onChange_,
}: SearchBoxProps) => {
  const [query, setQuery] = useState(initialValue)
  const filteredItems = filter(items, query)
  const [index, setIndex] = useState(-1)
  const indexMax = filteredItems.length - 1
  const indexMin = 0
  const inputNode = useRef<HTMLInputElement>(null)
  const [isSelected, setIsSelected] = useState(false)

  const onChange = debounce((e: OnChangeEvent) => {
    setQuery(e.target.value)
    onChange_?.(e.target.value)
  }, INPUT_DELAY)

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    switch (e.key) {
      case 'ArrowDown':
        setIndex(index < indexMax ? index + 1 : indexMin)
        break

      case 'ArrowUp':
        setIndex(index > indexMin ? index - 1 : indexMax)
        break

      case 'Enter':
        if (filteredItems[index] === undefined) break

        const item = filteredItems[index]
        setQuery(item)
        setIsSelected(true)
        break

      default:
        break
    }
  }

  const nextIndex = getNextIndex(query, filteredItems, index)
  if (nextIndex !== undefined) setIndex(nextIndex)

  //  processing 'onEnter'-event on selected item
  useEffect(() => {
    if (!(inputNode.current && isSelected)) return

    setIsSelected(false)
    inputNode.current.value = query
    setTimeout(() => onSelect?.(query))
  }, [isSelected, query, onSelect])

  //  maybe autofocus on mounting
  useEffect(() => {
    if (autofocus) inputNode.current?.focus()
  }, [autofocus])

  return (
    <section className="m-5 inline-block">
      <input
        ref={inputNode}
        name={name}
        id={id}
        type="search"
        className={clsx(
          'relative px-2 py-1 box-border outline-none disabled:border-gray-300',
          className
        )}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
      />

      <Switch
        true={<Loading />}
        false={
          <Items
            items={filteredItems}
            visible={!!query.length}
            query={query}
            index={index}
          />
        }
      >
        {String(loading) as 'true' | 'false'}
      </Switch>
    </section>
  )
}

function getNextIndex(
  query: string,
  filteredItems: string[],
  index: number
): MaybeUndefined<number> {
  let nextIndex

  // text printing started
  if (index === -1 && query.length && filteredItems.length) nextIndex = 0

  // text printing in progress and no matches
  if (query.length && !filteredItems.length) nextIndex = -1

  // text printing in progress, have matches, and filtered array is narrowing
  if (filteredItems.length <= index) return filteredItems.length - 1

  const haveNextIndex = nextIndex !== index
  if (haveNextIndex) return nextIndex
}

function filter(items: string[], value: string) {
  value = value.toLowerCase()
  return items.filter((val) => val.toLowerCase().includes(value))
}
