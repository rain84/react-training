import { useCallback, useState } from 'react'

export const useToggle = (init: boolean): [boolean, () => void] => {
  const [state, setState] = useState(init)
  const toggle = useCallback(() => setState((state) => !state), [])
  return [state, toggle]
}
