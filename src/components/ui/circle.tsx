import { clsx } from 'clsx'
import { forwardRef, HTMLAttributes } from 'react'

export const Circle = forwardRef<HTMLDivElement, HTMLAttributes<Element>>(
	({ className, children, ...props }, ref) => (
		<div
			ref={ref}
			className={clsx('rounded-full flex justify-center items-center h-12 w-12 p-2', className)}
			{...props}
		>
			<span>{children}</span>
		</div>
	),
)
