import { useContext, useRef } from 'react'
import { GsapContext } from './context'
import { Box } from 'ui'

export const HoverMe = ({ className }: IProps) => {
  const { gsap } = useContext(GsapContext)
  const box = useRef(null)

  const onEnter: React.MouseEventHandler = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: '#e77614', scale: 1.2 })
  }

  const onLeave: React.MouseEventHandler = ({ currentTarget }) => {
    gsap.to(currentTarget, { backgroundColor: '#28a92b', scale: 1 })
  }

  return (
    <Box
      ref={box}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`bg-[#28a92b] ${className}`}
    >
      Hover Me
    </Box>
  )
}
