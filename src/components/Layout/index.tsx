import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps): React.JSX.Element => {
  return <section className="layout-section">{children}</section>
}
