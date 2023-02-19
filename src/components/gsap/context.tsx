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

type TGsap = typeof gsap
type Register = (gsap: TGsap) => void
export type TContext = {
  useGsap: (cb: Register) => void
  gsap: TGsap
}

let register: (cb: Register) => () => void
const useGsap = (cb: Register) => {
  useEffect(() => register(cb), [])
}

export const GsapContext = createContext<TContext>({
  useGsap: () => {},
  gsap,
})

export const Gsap = ({ children, className }: IProps) => {
  const root = useRef(null)
  const [callbacks, setCallbacks] = useState<Array<Register>>([])
  const revert = useRef<(() => void)[]>([])

  register = useCallback((cb: Register) => {
    setCallbacks((prev) => [...prev, cb])

    const unregister = () => {
      setCallbacks((prev) => prev.filter((nextCb) => nextCb !== cb))
    }

    return unregister
  }, [])

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
  }, [callbacks])

  return (
    <GsapContext.Provider value={value}>
      <div ref={root} className={className}>
        {children}
      </div>
    </GsapContext.Provider>
  )
}
