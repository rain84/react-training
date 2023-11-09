import { clsx } from 'clsx'
import type { ReactNode } from 'react'

export const ScrollBox = ({
  children,
  className,
}: {
  children: ReactNode
  className: string
}) => (
  <div className={clsx(className, 'overflow-y-scroll scroll')}>{children}</div>
)

// Fully custom scrollbar
// https://www.thisdot.co/blog/creating-custom-scrollbars-with-react