import { HTMLAttributes, forwardRef } from 'react'
import { PlayIcon } from '@radix-ui/react-icons'

export const Button = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(({ className, onClick, children, ...props }, ref) => (
  <button
    {...props}
    ref={ref}
    onClick={onClick}
    className="p-2 border-2 rounded-md hover:bg-yellow-200"
  >
    {children}
  </button>
))

export const ButtonPlay = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement> & Partial<{ isPlay: boolean }>
>(({ className, isPlay, children, ...props }, ref) => (
  <Button {...props} className="text-center" ref={ref}>
    <PlayIcon
      className={`stroke-${isPlay ? 'green' : 'red'}-500 stroke-1 inline`}
    />
  </Button>
))
