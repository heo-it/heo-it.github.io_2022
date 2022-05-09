import React, { FunctionComponent } from 'react'
import Layout from 'components/Layout/Layout'
import PostList from 'components/Post/PostList'
import Description from 'components/Layout/Description'
import { graphql } from 'gatsby'

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

const IndexPage: FunctionComponent<IndexProps> = function() {
  return (
    <Layout>
      <Description title="blog" description={`N개의 게시글`} />
      <PostList />
    </Layout>
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