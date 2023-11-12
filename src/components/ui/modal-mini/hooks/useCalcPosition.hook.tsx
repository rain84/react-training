import { off } from 'process'
import { useEffect, type MutableRefObject } from 'react'

export const useCalcPosition = (
  modalRef: TRef,
  container: HTMLElement | null,
  offset: string,
  open: boolean
) =>
  useEffect(() => {
    if (!modalRef.current || !container) return

    const style = {
      container: getComputedStyle(container),
      body: getComputedStyle(document.body),
    }

    // default: right-bottom
    modalRef.current.style.top = `calc(${style.container.height} + ${style.container.borderBottomWidth} + ${offset})`
    modalRef.current.style.right = '0'

    const modalRect = modalRef.current.getBoundingClientRect()

    // is outer of the left bound of viewport
    if (modalRect.left < 0) {
      modalRef.current.style.left = '0'
      modalRef.current.style.right = 'initial'
    }

    // can be positioned in the center of container
    // else if (modalRect.width < parseInt(style.body.width)) {
    // }

    // is outer of the bottom bound of viewport
    if (modalRect.bottom > parseInt(style.body.height)) {
      modalRef.current.style.top = 'initial'
      modalRef.current.style.bottom = `calc(${style.container.height} + ${offset})`
    }

    modalRef.current.style.visibility = 'initial'
  }, [container, modalRef, offset, open])

type TRef = MutableRefObject<MaybeNull<HTMLElement>>
