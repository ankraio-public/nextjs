import type { ReactNode } from 'react'
import Stack from '@/components/elements/Stack'

import Content from '../elements/Content'
import ContentWrapper from '../elements/ContentWrapper'

interface ILayout {
  children: ReactNode
}

const Layout = ({ children }: ILayout) => {
  return (
    <Stack className="flex-col md:h-screen md:flex-row" spacing="none">
      {/* <Sidebar /> */}

      <ContentWrapper>
        <Content>{children}</Content>
      </ContentWrapper>
    </Stack>
  )
}

export default Layout
