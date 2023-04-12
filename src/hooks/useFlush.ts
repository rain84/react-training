import { useCallback, useState } from 'react'

export const useFlush = () => {
  const [, setState] = useState(true)
  const flush = useCallback(() => setState((state) => !state), [])
  return { flush }
}
