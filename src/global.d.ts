declare type MaybeNull<T> = T | null
declare type MaybeUndefined<T> = T | undefined
declare type Maybe<T> = MaybeNull<T> | MaybeUndefined<T>

declare interface IProps {
  className?: string
  children?: React.ReactNode
}

type EaseName =
  | 'power1'
  | 'power2'
  | 'power3'
  | 'power4'
  | 'back'
  | 'elastic'
  | 'bounce'
  | 'rough'
  | 'slow'
  | 'steps'
  | 'circ'
  | 'expo'
  | 'sine'
type EaseType = 'in' | 'inOut' | 'out' | 'out'
type GsapEase = 'none' | `${EaseName}.${EaseType}`

namespace gsap {
  interface TweenVars {
    ease?: GsapEase
  }
}

declare type OnClick<V extends unknown, T = HTMLElement> = (
  e: Event & {
    target: T & {
      value: V
    }
  }
) => void
