import { HTMLAttributes, forwardRef } from 'react'

export const Button = forwardRef<HTMLDivElement, HTMLAttributes<Element>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={`h-12 w-12 rounded-md flex justify-center items-center bg-slate-300 p-2 ${className}`}
      {...props}
    >
      <span>{children}</span>
    </div>
  )
)
