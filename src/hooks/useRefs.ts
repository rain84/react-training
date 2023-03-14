import { useRef } from 'react'

type Ref = HTMLElement

export const useRefs = () => {
  const refs = useRef<Ref[]>([])
  const add = (ref: MaybeNull<Ref>) => ref && refs.current.push(ref)

  return [refs.current, add] as const
}
