import clsx from 'clsx'
import { ModalMini } from 'components/ui'
import { MouseEventHandler, ReactNode, useState } from 'react'

export const ModalMiniPage = () => {
  const [open, setOpen] = useState(false)
  const show = () => setOpen(true)
  const hide = () => setOpen(false)

  return (
    <div className="flex justify-center relative">
      {['left-0', 'left-2/5', 'right-0'].map((pos) => (
        <Container
          key={pos}
          className={`absolute ${pos} mt-5 select-none border rounded-md p-2 hover:cursor-pointer`}
          isPressed={open}
          onClick={show}
        />
      ))}
    </div>
  )
}

const Days = () => (
  <>
    {days.map((item) => (
      <p
        key={item}
        className="hover:bg-red-100 py-2 px-16 bg-white first:rounded-t last:rounded-b"
      >
        {item}
      </p>
    ))}
  </>
)
const days = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday ',
  'Friday',
  'Saturday',
  'Sunday',
]

interface IProps {
  className?: string
  isPressed: boolean
  onClick: MouseEventHandler<HTMLSpanElement>
}

const Container = ({ isPressed, className = '', onClick }: IProps) => {
  const [open, setOpen] = useState(false)
  const show = () => setOpen(true)
  const hide = () => setOpen(false)

  return (
    <span
      onClick={show}
      className={clsx(className, isPressed && 'shadow-inner bg-slate-100')}
    >
      <span>Button with Modal-Mini</span>
      <ModalMini
        open={open}
        onClose={hide}
        className="border rounded-md hover:cursor-pointer"
      >
        <Days />
      </ModalMini>
    </span>
  )
}
