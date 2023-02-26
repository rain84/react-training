import { useContext, useEffect, useRef, useState } from 'react'
import { GsapContext } from './context'
import { Box, Circle, ButtonPlay } from 'ui'
import { useToggle } from 'hooks'

export const Timelines = ({ className }: IProps) => {
  const { useGsap } = useContext(GsapContext)
  const timeline = useRef<gsap.core.Timeline>()
  const shape = {
    box: useRef(null),
    circle: useRef(null),
  }

  const [isPlayed, setPlay] = useState(true)
  const [reverse, toggleReverse] = useToggle()

  useGsap((gsap) => {
    timeline.current?.progress(0).kill()
    timeline.current = gsap
      .timeline({
        onStart: () => setPlay(true),
        onComplete: () => setPlay(false),
        onReverseComplete: () => setPlay(false),
      })
      .to(shape.box.current, { rotate: 360 })
      .to(shape.circle.current, {
        x: 50,
      })
  })

  useEffect(() => {
    timeline.current?.reversed(reverse)
    if (reverse) setPlay(true)
  }, [reverse])

  return (
    <div className="flex flex-col justify-between space-y-4">
      <ButtonPlay
        onClick={toggleReverse}
        className="text-center"
        isPlayed={isPlayed}
      />
      <Box ref={shape.box} className="bg-green-600">
        Box
      </Box>
      <Circle ref={shape.circle} className="bg-green-600">
        Circle
      </Circle>
    </div>
  )
}
