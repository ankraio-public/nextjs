import Stack from './Stack'
import type { ReactNode } from 'react'

interface IContent {
  children: ReactNode
}

const Content = ({ children }: IContent) => {
  return (
    <Stack direction="vertical" className="max-w-xl !gap-10">
      {children}
    </Stack>
  )
}

export default Content
