import clsx from 'clsx'
import { HTMLAttributes, forwardRef } from 'react'

export const Box = forwardRef<HTMLDivElement, HTMLAttributes<Element>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={clsx(
        'rounded-md flex justify-center items-center h-12 w-12 p-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)
