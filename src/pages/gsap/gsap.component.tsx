import { Gsap, Rotate, HoverMe, ReusableComponents } from 'components/gsap'

export const GsapPage = () => (
  <section>
    <p className="text-center text-red-600 uppercase">gsap</p>
    <Gsap className="flex flex-row justify-start space-x-4">
      <Rotate />
      <HoverMe />
      <ReusableComponents />
    </Gsap>
  </section>
)
