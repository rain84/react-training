// TODO: add tests

import {
  useLayoutEffect,
  useRef,
  createContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from 'react'
import { gsap } from 'gsap'
import { useArray } from 'hooks'

type TGsap = typeof gsap
type Register = (gsap: TGsap) => void

export type TContext = {
  useGsap: (cb: Register, deps: any[]) => void
  gsap: TGsap
}

export const GsapContext = createContext<TContext>({
  useGsap: () => {},
  gsap,
})

const GsapProvider = ({ children, className }: IProps) => {
  const root = useRef(null)
  const [deps, { add: addDeps, remove: removeDeps }] = useArray<any>([])
  const [callbacks, setCallbacks] = useState<Array<Register>>([])
  const revert = useRef<(() => void)[]>([])

  const register = useCallback((cb: Register) => {
    setCallbacks((prev) => [...prev, cb])
    const unregister = () => {
      setCallbacks((prev) => prev.filter((nextCb) => nextCb !== cb))
    }
    return unregister
  }, [])

  const useGsap = (cb: Register, nextDeps: any[]) => {
    useEffect(() => {
      const unregister = register(cb)
      if (Array.isArray(nextDeps)) addDeps(...nextDeps)

      return () => {
        unregister()
        if (Array.isArray(nextDeps)) removeDeps(...nextDeps)
      }
    }, [])
  }

  const value = useMemo<TContext>(
    () => ({
      useGsap,
      gsap,
    }),
    []
  )

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      callbacks.forEach((cb) => {
        const cleanup = cb(gsap)
        if (typeof cleanup === 'function') revert.current.push(cleanup)
      })
    }, root)

    return () => {
      revert.current.forEach((cleanup) => cleanup())
      revert.current.length = 0
      ctx.revert()
    }
  }, [callbacks, deps])

  return (
    <GsapContext.Provider value={value}>
      <div ref={root} className={className}>
        {children}
      </div>
    </GsapContext.Provider>
  )
}

export const Gsap = GsapProvider
