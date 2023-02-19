import { useContext, useRef } from 'react'
import { GsapContext } from './context'
import { Button } from 'ui'

export const Rotate = ({ className }: IProps) => {
  const { useGsap } = useContext(GsapContext)
  const box = useRef(null)

  useGsap((gsap) => {
    gsap.to(box.current, { rotation: '+360' })
  })

  return (
    <Button ref={box} className={`bg-orange-400 ${className}`}>
      <span>Hello</span>
    </Button>
  )
}
