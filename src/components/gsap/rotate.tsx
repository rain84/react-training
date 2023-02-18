import { useContext, useRef } from 'react'
import { GsapContext } from './context'

export const Rotate = () => {
  const { useGsap } = useContext(GsapContext)
  const box = useRef(null)

  useGsap((gsap) => {
    gsap.to(box.current, { rotation: '+360' })
  })

  return (
    <div
      ref={box}
      className="box h-12 w-12 rounded-md bg-slate-400 flex justify-center items-center"
    >
      <span>Hello</span>
    </div>
  )
}
