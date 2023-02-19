import { useContext, useRef } from 'react'
import { GsapContext } from './context'
import { Box } from 'ui'

export const Rotate = ({ className }: IProps) => {
  const { useGsap } = useContext(GsapContext)
  const box = useRef(null)

  useGsap((gsap) => {
    gsap.to(box.current, { rotation: '+360' })
  })

  return (
    <Box ref={box} className={`bg-orange-400 ${className}`}>
      <span>Hello</span>
    </Box>
  )
}
