import { useContext, useRef } from 'react'
import { GsapContext } from './context'
import { Box } from 'ui'

export const ReusableComponents = ({ className }: IProps) => {
  const { useGsap } = useContext(GsapContext)
  const box = {
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
  }

  //  prettier-ignore
  useGsap((gsap) => {
    gsap.to(box[1].current, { rotation: 360, repeat: -1, repeatDelay: 1, yoyo: true })
    gsap.to(box[3].current, { x: -80, repeat: -1, repeatDelay: 1, yoyo: true })
    gsap.set(box[2].current, { backgroundColor: 'red' })
  })

  return (
    <div className="flex flex-col justify-between space-y-4">
      <Box ref={box[1]} className="bg-green-600">
        Box
      </Box>
      <Box ref={box[2]} className="bg-green-600">
        <span className="inline-block font-bold scale-50">
          Don't Animate Me
        </span>
      </Box>
      <Box ref={box[3]} className="bg-green-600">
        Box
      </Box>
    </div>
  )
}
