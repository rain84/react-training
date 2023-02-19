import { GsapProvider, Rotate, HoverMe } from 'components/gsap'

export const Gsap = () => (
  <section>
    <p className="text-center text-red-600 uppercase">gsap</p>
    <GsapProvider>
      <div className="flex flex-row justify-start">
        <Rotate className="mr-4" />
        <HoverMe className="mr-4" />
      </div>
    </GsapProvider>
  </section>
)
