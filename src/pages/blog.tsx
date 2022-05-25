import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import Layout from 'components/Layout/Layout'
import PostList from 'components/Post/PostList'
import Description from 'components/Layout/Description'

type BlogProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}

const BlogPage: FunctionComponent<BlogProps> = function ({
  data: {
    allMarkdownRemark: { edges }
  }
}) {
 return (
  <Layout title="blog" description={`${edges.length}개의 게시글`}>
    <Description title="blog" description={`${edges.length}개의 게시글`} />
    <PostList posts={ edges } />
  </Layout>
 )
}

export const BlogQuery = graphql`
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
        }
      }
    }
  }
`;

export default BlogPage