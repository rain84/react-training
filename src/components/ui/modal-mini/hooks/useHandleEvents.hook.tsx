import { useEffect, type MutableRefObject } from 'react'

export const useHandleEvents = (
  open: boolean,
  modalRef: MutableRefObject<MaybeNull<HTMLElement>>,
  click: MutableRefObject<{ isInitial: boolean }>,
  onClose: () => void
) => {
  useEffect(() => {
    const onOuterClick = (e: MouseEvent) => {
      if (!open || !modalRef.current || !e.target) return

      const isOuterClick = !modalRef.current.contains(e.target as HTMLElement)
      if (!isOuterClick) return

      if (click.current.isInitial) {
        click.current.isInitial = false
      } else {
        // reset to initial state
        click.current.isInitial = true
        onClose()
      }
    }

    const onKeydown = (e: KeyboardEvent) => e.key === 'Escape' && onClose()

    document.body.addEventListener('click', onOuterClick)
    document.body.addEventListener('keydown', onKeydown, false)

    return () => {
      document.body.removeEventListener('click', onOuterClick)
      document.body.removeEventListener('keydown', onKeydown, false)
    }
  }, [open, onClose, click, modalRef])
}
