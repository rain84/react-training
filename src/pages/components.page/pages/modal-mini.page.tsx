import { useState } from 'react'
import clsx from 'clsx'
import { ModalMini } from 'components/ui'

export const ModalMiniPage = () => (
  <div className="flex justify-center relative h-full">
    {['-left-[270px] top-[10em]', 'left-2/5', 'right-0', 'bottom-0'].map(
      (pos) => (
        <Container
          key={pos}
          className={`absolute ${pos} mt-5 select-none border rounded-md p-2 hover:cursor-pointer`}
        />
      )
    )}
  </div>
)

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
}

const Container = ({ className = '' }: IProps) => {
  const [open, setOpen] = useState(false)
  const show = () => setOpen(true)
  const hide = () => setOpen(false)

  return (
    <span
      onClick={show}
      className={clsx(className, {
        'shadow-inner bg-slate-100': open,
        'bg-white': !open,
      })}
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
