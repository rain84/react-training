import { ChangeEventHandler, useContext, useRef, useState } from 'react'
import { GsapContext } from './context'
import { Box, Input, ButtonPlay } from 'ui'
import { useToggle } from 'hooks'

import debounce from 'lodash/debounce'

const INITIAL_WIDTH = -80
const INPUT_DELAY = 50

export const ReusableComponents = () => {
  const { useGsap } = useContext(GsapContext)
  const [isPlayed, toggle] = useToggle(true)
  const box = {
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
  }
  const tweens = {
    1: useRef<gsap.core.Tween>(),
    3: useRef<gsap.core.Tween>(),
  }

  //  update with "useDeferredValue"
  const [width, setWidth] = useState(INITIAL_WIDTH)
  const updateWidth: ChangeEventHandler<HTMLInputElement> = debounce(
    (e) => setWidth(+e.target.value),
    INPUT_DELAY
  )

  //  prettier-ignore
  useGsap((gsap) => {
    gsap.globalTimeline.kill()
    tweens[1].current = gsap.to(box[1].current, { rotation: 360, repeat: -1, repeatDelay: 1, yoyo: true })
    tweens[3].current = gsap.to(box[3].current, { x: width, repeat: -1, repeatDelay: 1, yoyo: true })
    gsap.set(box[2].current, { backgroundColor: 'red' })

    if (!isPlayed) {
      tweens[1].current.kill()
      tweens[3].current.kill()
    }
  }, [width, isPlayed])

  return (
    <div className="flex flex-col justify-between space-y-4">
      <ButtonPlay
        onClick={toggle}
        className="text-center"
        isPlayed={isPlayed}
      />

      <Input.Number
        defaultValue={width}
        onChange={updateWidth}
        className="w-20"
      />

      <Box ref={box[1]} className="bg-green-600" children="Box" />
      <Box ref={box[2]} className="bg-green-600">
        <span className="inline-block font-bold scale-50">
          Don't Animate Me
        </span>
      </Box>
      <Box ref={box[3]} className="bg-green-600" children="Box" />
    </div>
  )
}
