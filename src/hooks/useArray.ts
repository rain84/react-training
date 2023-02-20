import { useState } from 'react'

type Add<T> = (...nextArr: T[]) => void
type Result<T> = [
  T[],
  {
    add: Add<T>
    remove: Add<T>
    clear: () => void
  }
]

export const useArray = <T>(arr: T[] = []): Result<T> => {
  const [state, setState] = useState(arr)

  const add = (...nextArr: T[]): void =>
    setState((state) => [...state, ...nextArr])

  const remove = (...removedArr: T[]): void =>
    setState((state) => state.filter((x) => !removedArr.includes(x)))

  const clear = (): void => setState(() => [])

  return [state, { add, remove, clear }]
}
