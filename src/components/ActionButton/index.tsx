import clsx from 'clsx'

import { ReactNode } from 'react'

interface ActionButtonProps {
  children?: ReactNode
  className?: string
  onClick?: () => void
  title?: string
}

export const ActionButton = ({
  children,
  className,
  onClick,
  title,
}: ActionButtonProps): React.JSX.Element => {
  return (
    <div
      className={clsx('action-btn', className)}
      onClick={(): void => {
        if (onClick) {
          onClick()
        }
      }}
    >
      {!!title && title}
      {children && children}
    </div>
  )
}
