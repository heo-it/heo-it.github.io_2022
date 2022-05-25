import React, { FunctionComponent } from 'react'
import Layout from 'components/Layout/Layout';
import Introduction from 'components/Profile/Introduction';

const About: FunctionComponent = function ({}) {
  return (
    <Layout>
      <Introduction />
    </Layout>
  )
}

export default About;