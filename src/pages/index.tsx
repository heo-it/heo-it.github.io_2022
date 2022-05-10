import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import Layout from 'components/Layout/Layout'
import PostList from 'components/Post/PostList'
import Description from 'components/Layout/Description'

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
      <Description title="blog" description={`${edges.length}개의 게시글`} />
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
          frontmatter {
            title
            date
            summary
            categories
          }
        }
      }
    }
  }
`;

export default IndexPage;