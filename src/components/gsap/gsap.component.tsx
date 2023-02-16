import {  useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const Gsap = () => {
  const root = useRef(null)  

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.box', {rotation: "+360"})
    }, root)

    return () => ctx.revert()
  }, [])

  return <div ref={root}>
    <div className="box">Hello</div>
  </div>
}
