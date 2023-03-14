import { useContext, useRef } from 'react'
import { GsapContext } from './context'
import { Box, ButtonPlay } from 'ui'
import { useToggle } from 'hooks'

export const Rotate = ({ className }: IProps) => {
  const { useGsap } = useContext(GsapContext)
  const [isPlaying, toggle] = useToggle(true)
  const box1 = useRef(null)
  const box2 = useRef(null)
  const box3 = useRef(null)
  const tween = useRef<gsap.core.Tween>()

  useGsap(
    (gsap) => {
      tween.current = gsap.to([box1.current, box2.current, box3.current], {
        rotation: '+360',
        repeat: isPlaying ? -1 : 0,
        duration: 1,
        stagger: 0.5,
        repeatDelay: 1,
        ease: 'back.in',
      })
      if (!isPlaying) tween.current.kill()
    },
    [isPlaying]
  )

  return (
    <section className="flex flex-col space-y-4">
      <ButtonPlay
        onClick={toggle}
        className="text-center"
        isPlaying={isPlaying}
      />
      <Box ref={box1} className={`bg-orange-400 ${className}`}>
        Hello 1
      </Box>
      <Box ref={box2} className={`bg-orange-400 ${className}`}>
        Hello 1
      </Box>
      <Box ref={box3} className={`bg-orange-400 ${className}`}>
        Hello 1
      </Box>
    </section>
  )
}
