import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { PostType } from '../components/Post/PostList'
import Layout from 'components/Layout/Layout'
import PostList from 'components/Post/PostList'
import Description from 'components/Layout/Description'

type IndexProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
      }
    },
    allMarkdownRemark: {
      edges: PostType[]
    }
  }
}

const IndexPage: FunctionComponent<IndexProps> = function({
  data: {
    allMarkdownRemark: { edges }
  }
}) {
  return (
    <Layout>
      <Description title="blog" description={`N개의 게시글`} />
      <PostList posts={ edges } />
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
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
            summary
            categories
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;