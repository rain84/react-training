import { useState, useEffect, type MutableRefObject } from 'react'

export const useContainer = (
  modalRef: TRef,
  open: boolean,
  onClose: () => void
) => {
  const [containerNode, setContainerNode] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (!modalRef.current?.parentElement) return

    // looking for a parent container with 'relative' or 'absolute'
    let container = modalRef.current
    let position = ''
    const positions = ['static', 'absolute']
    do {
      if (container.parentElement === null) throw new Error(ERROR_MESSAGE)
      container = container.parentElement
      position = getComputedStyle(container).position
    } while (!positions.includes(position))

    setContainerNode(container)
  }, [modalRef, open, onClose])

  return containerNode
}
const ERROR_MESSAGE =
  'ModalMini. Parent-container should have position different form "static".'

type TRef = MutableRefObject<MaybeNull<HTMLElement>>
