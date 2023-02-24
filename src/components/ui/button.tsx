import { HTMLAttributes, forwardRef } from 'react'

export const Button = forwardRef<HTMLDivElement, HTMLAttributes<Element>>(
  ({ className, onClick, children, ...props }, ref) => (
    <button
      onClick={onClick}
      className="p-2 border-2 rounded-md hover:bg-yellow-200"
    >
      {children}
    </button>
  )
)
