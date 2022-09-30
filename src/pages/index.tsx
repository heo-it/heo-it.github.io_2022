import React, { FunctionComponent } from 'react'
import Layout from 'components/Layout/Layout'
import Introduction from 'components/Profile/Introduction'

const IndexPage: FunctionComponent= function() {
  return (
    <Layout>
      <Introduction />
    </Layout>
  )
}

export default IndexPage