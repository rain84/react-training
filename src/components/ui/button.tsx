import { HTMLAttributes, forwardRef } from 'react'

export const Button = forwardRef<HTMLDivElement, HTMLAttributes<Element>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={`rounded-md flex justify-center items-center h-12 w-12 p-2 ${className}`}
      {...props}
    >
      <span>{children}</span>
    </div>
  )
)
