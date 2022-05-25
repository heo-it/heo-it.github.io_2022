import React, { FunctionComponent, ReactNode, Fragment } from 'react'
import { Global } from '@emotion/react'
import Container from './Container.style'
import GlobalStyle from './Global.style'
import Header from './Header'
import Footer from './Footer'
import LayoutWrapper from './Layout.style'
import SEO from './SEO'

type LayoutProp = {
  title?: string
  description?: string
  children: ReactNode
}

const Layout: FunctionComponent<LayoutProp> = function ({ title, description, children }) {
  return (
    <Fragment>
      <SEO title={title} description={description} />
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

