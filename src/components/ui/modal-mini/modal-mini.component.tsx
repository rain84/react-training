import { useRef, type ReactNode } from 'react'
import { useCalcPosition, useContainer, useHandleEvents } from './hooks'
import clsx from 'clsx'

const DEFAULT_OFFSET = '4px'

export const ModalMini = ({
  children,
  offset = DEFAULT_OFFSET,
  open,
  className,
  onClose,
}: IProps) => {
  const modalRef = useRef<MaybeNull<HTMLElement>>(null)
  const click = useRef({ isInitial: true })

  const container = useContainer(modalRef, open, onClose)
  useCalcPosition(modalRef, container, offset, open)
  useHandleEvents(open, modalRef, click, onClose)

  if (!open) return null

  return (
    <section
      className={clsx('absolute invisible z-10', className)}
      ref={modalRef}
    >
      {children}
    </section>
  )
}

interface IProps {
  className: string
  children: ReactNode
  offset?: string
  open: boolean

  onClose: () => void
}
