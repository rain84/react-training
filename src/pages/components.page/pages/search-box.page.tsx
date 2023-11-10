import { SearchBox } from 'components/ui'
import cities from 'data-mocks/cities.json'
import { useCallback, useEffect, useState } from 'react'

type TCities = typeof cities

const NETWORK_DELAY = 500

export const SearchBoxPage = () => {
  const [items, setItems] = useState<Promise<TCities>>()

  const onChange = useCallback((query: string) => {
    setItems(getCities())
  }, [])

  useEffect(() => {
    setItems(getCities())
  }, [])

  return (
    <section>
      <SearchBox
        items={items}
        className="border border-violet-700 rounded-sm w-40"
        onSelect={alert}
        onChange={onChange}
        autofocus
      />
    </section>
  )
}

async function getCities() {
  return new Promise<TCities>((res, rej) => {
    setTimeout(() => res(cities), NETWORK_DELAY)
  })
}
