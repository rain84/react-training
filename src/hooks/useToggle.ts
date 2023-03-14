import { useState } from 'react'

export const useToggle = (init: boolean): [boolean, () => void] => {
  const [state, setState] = useState(init)
  return [state, () => setState((state) => !state)]
}
