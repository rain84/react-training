import { HTMLAttributes, forwardRef } from 'react'
import { PlayIcon } from '@radix-ui/react-icons'
import { clsx } from 'clsx'

export const Button = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement>
>(({ className, onClick, children, ...props }, ref) => (
  <button
    {...props}
    ref={ref}
    onClick={onClick}
    className="p-2 border-2 rounded-md hover:bg-yellow-200 inline w-12 h-12"
  >
    {children}
  </button>
))

const colors = {
  true: 'green',
  false: 'red',
} as const

type ColorTypes = keyof typeof colors
const color = (x?: boolean) => colors[String(!!x) as ColorTypes]

export const ButtonPlay = forwardRef<
  HTMLButtonElement,
  HTMLAttributes<HTMLButtonElement> & Partial<{ isPlaying: boolean }>
>(({ className, isPlaying: isPlayed, children, ...props }, ref) => (
  <Button {...props} className="text-center" ref={ref}>
    <PlayIcon
      className={clsx(
        `stroke-${color(isPlayed)}-500`,
        `fill-${color(isPlayed)}-500`,
        'stroke-1 inline '
      )}
    />
  </Button>
))
