import { useState, useRef, useEffect } from 'react'
import type { KeyboardEventHandler } from 'react'
import debounce from 'lodash/debounce'
import clsx from 'clsx'
import { Items, Loading, Error } from './items.component'
import type {
  OnChangeEvent,
  SearchBoxProps,
  TItemsState,
} from './search-box.types'
import { Switch } from 'components/utils'
import { log } from 'console'

const INPUT_DELAY = 200

export const SearchBox = ({
  className,
  items: items_ = [],
  initialValue = '',
  id = '',
  name = '',
  autofocus = false,
  disabled = false,

  onSelect,
  onChange: onChange_,
  onError,
}: SearchBoxProps) => {
  const [query, setQuery] = useState(initialValue)

  const [isAsync, setIsAsync] = useState(items_ instanceof Promise)
  const [items, setItems] = useState(isAsync ? [] : (items_ as string[]))
  const [itemsState, setItemsState] = useState<TItemsState>(
    isAsync ? 'loading' : 'ready'
  )
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

  // process async items
  useEffect(() => {
    console.log('useEffect')

    const canProcess =
      // incoming promisified data
      (!isAsync && items_ instanceof Promise) ||
      (!isAsync && itemsState === 'ready')

    if (canProcess) {
      ;(async () => {
        try {
          console.log('process: loading')
          setItemsState('loading')
          setIsAsync(true)
          const items = await items_
          setItems(items)
          setItemsState('ready')
        } catch (error) {
          setItemsState('error')
          onError?.(error as Error)
        } finally {
          setIsAsync(false)
        }
      })()
    }
  }, [items_, onError, isAsync, itemsState])

  return (
    <section className="m-5 inline-block">
      <br />
      itemsState:'{itemsState}', isAsync: '{String(isAsync)}'
      <br />
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
        loading={Loading}
        ready={
          <Items
            items={filteredItems}
            visible={!!query.length}
            query={query}
            index={index}
          />
        }
        error={Error}
      >
        {itemsState}
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
