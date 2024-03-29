import { HTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'

export const Circle = forwardRef<HTMLDivElement, HTMLAttributes<Element>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(
        'rounded-full flex justify-center items-center h-12 w-12 p-2',
        className
      )}
      {...props}
    >
      <span>{children}</span>
    </div>
  )
)
