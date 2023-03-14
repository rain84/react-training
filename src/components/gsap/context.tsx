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
type Register = (gsap: TGsap, context: gsap.Context) => void | (() => void)

export type TContext = {
  useGsap: (cb: Register, deps?: unknown[]) => void
  gsap: TGsap
}

export const GsapContext = createContext<TContext>({
  useGsap: () => {},
  gsap,
})

const GsapProvider = ({ children, className }: IProps) => {
  const root = useRef(null)
  const [deps, { add: addDeps, remove: removeDeps }] = useArray<unknown>([])
  const [callbacks, setCallbacks] = useState<Array<Register>>([])
  const revert = useRef<(() => void)[]>([])

  const register = useCallback((cb: Register) => {
    setCallbacks((prev) => [...prev, cb])
    const unregister = () => {
      setCallbacks((prev) => prev.filter((nextCb) => nextCb !== cb))
    }
    return unregister
  }, [])

  const useGsap = (cb: Register, nextDeps?: unknown[]) => {
    useEffect(() => {
      const unregister = register(cb)
      if (nextDeps) addDeps(...nextDeps)

      return () => {
        unregister()
        if (nextDeps) removeDeps(...nextDeps)
      }
    }, [nextDeps, cb])
  }

  const value = useMemo<TContext>(
    () => ({
      useGsap,
      gsap,
    }),
    []
  )

  useLayoutEffect(() => {
    let ctx: gsap.Context
    ctx = gsap.context(() => {
      callbacks.forEach((cb) => {
        const cleanup = cb(gsap, ctx)
        if (cleanup) revert.current.push(cleanup)
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
