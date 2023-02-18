import { GsapProvider, Rotate } from 'components/gsap'

export const Gsap = () => (
  <section>
    <p className="text-center text-red-600 uppercase">gsap</p>
    <GsapProvider>
      <Rotate />
    </GsapProvider>
  </section>
)
