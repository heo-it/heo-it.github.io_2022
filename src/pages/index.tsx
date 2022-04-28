import React, { FunctionComponent } from 'react'
import Layout from 'components/layout'
import { graphql } from 'gatsby';

type IndexProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    }
  }
}

const IndexPage: FunctionComponent<IndexProps> = function({
  data: {
    site: {
      siteMetadata: { title, description }
    }
  }
}) {
  return (
    <>
      <Layout title={title} description={description}>
        <div>main</div>
      </Layout>
    </>
  )
}

export const IndexQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

export default IndexPage;