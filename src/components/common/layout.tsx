import React, { FunctionComponent, Component } from 'react'

type LayoutProp = {
  children: Component,
  title: string,
  description: string,
  socialImage: string
}
const Layout: FunctionComponent<LayoutProp> = function ({ children, title, description, socialImage = '' }) {
  return (
    <></>
  )
}

export default Layout