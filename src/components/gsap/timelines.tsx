import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Box, Circle, ButtonPlay } from 'ui'
import { gsap } from 'gsap'
import { withLog } from 'utils'

export const Timelines = ({ className }: IProps) => {
  const timeline = useRef<gsap.core.Timeline>()
  const shape = {
    box: useRef(null),
    circle: useRef(null),
  }
  const root = useRef(null)

  const [isPlaying, setPlay] = useState(false)
  const [isPausing, setPause] = useState(false)
  const [isReverse, toggleReverse] = useState(false)
  const duration = 2

  // TODO: refactor with useGsap-hook
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      timeline.current?.progress(0)?.kill()
      timeline.current = gsap
        .timeline({
          onStart: withLog('onStart')(),
          onComplete: withLog('onComplete')(() => {
            setPlay(false)
            toggleReverse(true)
          }),
          onReverseComplete: withLog('onReverseComplete')(() => {
            setPlay(false)
            toggleReverse(false)
          }),
        })
        .to(shape.box.current, { rotate: 360, duration })
        .to(shape.circle.current, { x: 50, duration })
        .pause()
    }, root)
  }, [shape.box, shape.circle, setPlay, toggleReverse])

  const onClick = () => {
    const tl = timeline.current
    if (!tl) return

    if (isPlaying) {
      setPause((x) => !x)
    } else {
      setPlay(true)
    }
  }

  useEffect(() => {
    const tl = timeline.current
    if (!tl) return

    // TODO: rewrite with XState
    if (isPlaying) {
      if (isPausing) tl.pause()
      else {
        if (isReverse) tl.reverse()
        else tl.play()
      }
    }
  }, [isPausing, isPlaying, isReverse])

  return (
    <div className="flex flex-col justify-between space-y-4" ref={root}>
      <ButtonPlay
        onClick={onClick}
        className="text-center"
        isPlaying={isPlaying && !isPausing}
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
