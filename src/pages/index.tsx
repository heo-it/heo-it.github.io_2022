import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import Layout from 'components/Layout/Layout'
import PostList from 'components/Post/PostList'
import Introduction from 'components/Profile/Introduction'

type IndexProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
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
      <Introduction />
      <PostList posts={ edges } />
    </Layout>
  )
}

export const IndexQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            summary
            categories
          }
          timeToRead
        }
      }
    }
  }
`;

export default IndexPage