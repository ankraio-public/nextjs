import type { ReactNode } from 'react'

interface IContentWrapper {
  children: ReactNode
}

const ContentWrapper = ({ children }: IContentWrapper) => {
  return (
    <div className="p-8 pt-10 overflow-y-auto md:w-3/5 md:p-12 md:pt-14">
      {children}
    </div>
  )
}

export default ContentWrapper
