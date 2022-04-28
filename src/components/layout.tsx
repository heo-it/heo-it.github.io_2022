import React, { FunctionComponent, ReactNode, Fragment } from 'react'
import Header from './header'
import Footer from './footer'
import Container from '../components/common/container'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'
import GlobalStyle from './common/global-style'

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  & main {
    margin-top: auto;
    margin-bottom: auto;
  }

  & footer {
    margin-top: auto;
  }
`

type LayoutProp = {
  children: ReactNode,
  title: string,
  description?: string,
  socialImage?: string
}

const Layout: FunctionComponent<LayoutProp> = function ({ children, title, description, socialImage = '' }) {
  return (
    <Fragment>
      <Global styles={GlobalStyle} />
      <Header title={title}/>
      <LayoutWrapper>
        <main>
          <Container>{children}</Container>
        </main>
      </LayoutWrapper>
      <Footer />
    </Fragment>
  )
}

export default Layout

