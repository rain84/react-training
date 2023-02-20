import { useContext, useEffect, useRef } from 'react'
import { GsapContext } from './context'
import { Box, Circle } from 'ui'
import { useToggle } from 'hooks'

export const Timelines = ({ className }: IProps) => {
  const { useGsap } = useContext(GsapContext)
  const timeline = useRef<gsap.core.Timeline>()
  const shape = {
    box: useRef(null),
    circle: useRef(null),
  }

  const [isAninating, animate] = useToggle()

  useGsap((gsap) => {
    timeline.current?.progress(0).kill()
    timeline.current = gsap
      .timeline()
      .to(shape.box.current, { rotate: 360 })
      .to(shape.circle.current, { x: 50 })
  })

  useEffect(() => {
    timeline.current?.reversed(isAninating)
  }, [isAninating])

  return (
    <div className="flex flex-col justify-between space-y-4">
      <Box ref={shape.box} className="bg-green-600">
        Box
      </Box>
      <button
        onClick={animate}
        className="p-2 border-2 rounded-md hover:bg-yellow-200"
      >
        Toggle
      </button>
      <Circle ref={shape.circle} className="bg-green-600">
        Circle
      </Circle>
    </div>
  )
}
