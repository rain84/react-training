import { useEffect, type MutableRefObject } from 'react'

export const useCalcPosition = (
  modalRef: TRef,
  container: HTMLElement | null,
  offset: number,
  open: boolean
) =>
  useEffect(() => {
    if (!modalRef.current || !container) return

    // get width and height of modal-mini
    // set position to 'fixed' with (0, 0) - coordinates
    modalRef.current.style.position = 'fixed'
    modalRef.current.style.left = `0`
    modalRef.current.style.top = `0`

    const width = modalRef.current.offsetWidth
    const height = modalRef.current.offsetHeight

    // and revert position to initial
    modalRef.current.style.left = `initial`
    modalRef.current.style.top = `initial`
    modalRef.current.style.position = 'absolute'

    const style = {
      container: getComputedStyle(container),
      body: getComputedStyle(document.body),
    }

    const border = style.container.borderWidth

    // default: right-bottom
    modalRef.current.style.top = `${
      parseInt(style.container.height) + offset + parseInt(border)
    }px`
    modalRef.current.style.right = `-${border}`

    const containerRect = container.getBoundingClientRect()
    const diff = (width - containerRect.width) / 2

    const isOuterOfTheLeft = containerRect.x + containerRect.width - width < 0

    const isOuterOfTheBottom =
      containerRect.y +
        containerRect.height +
        offset +
        height +
        parseInt(border) >
      parseInt(style.body.height)

    const canBeCentered =
      containerRect.x + containerRect.width + diff < parseInt(style.body.width)

    // is outer of the left bound of viewport
    if (isOuterOfTheLeft) {
      modalRef.current.style.left = `-${border}`
      modalRef.current.style.right = 'initial'
    }

    // can be positioned in the center of container
    else if (canBeCentered) {
      const left = (width - containerRect.width) / 2
      modalRef.current.style.left = `-${left}px`
      modalRef.current.style.right = 'initial'
    }

    // is outer of the bottom bound of viewport
    if (isOuterOfTheBottom) {
      modalRef.current.style.bottom = `-${
        containerRect.y - offset - parseInt(border)
      }px`
    }

    // make <ModalMini/> visible
    modalRef.current.style.visibility = 'initial'
  }, [container, modalRef, offset, open])

type TRef = MutableRefObject<MaybeNull<HTMLElement>>
