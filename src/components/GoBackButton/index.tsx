import clsx from 'clsx'

import React, { ReactNode } from 'react'

interface GoBackButtonProps {
  children: ReactNode
  className: string
  onClick: () => void
}

export const GoBackButton = ({
  children,
  className,
  onClick,
}: GoBackButtonProps): React.JSX.Element => {
  return (
    <button className={clsx('go-back__btn', className)} onClick={onClick}>
      {children}
    </button>
  )
}
