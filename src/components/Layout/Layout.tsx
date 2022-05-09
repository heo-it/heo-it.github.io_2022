import React, { FunctionComponent, ReactNode, Fragment } from 'react'
import { Global } from '@emotion/react'
import Container from './Container.style'
import GlobalStyle from './Global.style'
import Header from './Header'
import Footer from './Footer'
import LayoutWrapper from './Layout.style'

type LayoutProp = {
  children: ReactNode
}

const Layout: FunctionComponent<LayoutProp> = function ({ children }) {
  return (
    <Fragment>
      <Global styles={GlobalStyle} />
      <Header title="Heo-It"/>
      <main>
        <LayoutWrapper>
          <Container>{children}</Container>
        </LayoutWrapper>
      </main>
      <Footer />
    </Fragment>
  )
}

export default Layout

