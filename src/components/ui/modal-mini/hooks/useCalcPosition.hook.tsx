import { useEffect, type MutableRefObject } from 'react'

export const useCalcPosition = (
  modalRef: TRef,
  container: HTMLElement | null,
  offset: string,
  open: boolean
) =>
  useEffect(() => {
    if (!modalRef.current || !container) return

    const style = getComputedStyle(container)

    modalRef.current.style.top = `calc(${style.height} + ${style.borderBottomWidth} + ${offset})`
    modalRef.current.style.right = '0'
    modalRef.current.style.visibility = 'initial'
  }, [container, modalRef, offset, open])

type TRef = MutableRefObject<MaybeNull<HTMLElement>>
