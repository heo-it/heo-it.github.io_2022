import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout/Layout'
import PostContent from 'components/Post/PostContent'
import PostDescription from 'components/Post/Description'
import { PostListItemType } from 'types/PostItem.types'
import Comment from 'components/Post/Comment'

type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: {
      edges
    }
  }
}) {
  const {
    node: {
      html,
      frontmatter: {
        title,
        date,
        categories
      },
    },
  } = edges[0]

  return (
    <Layout title={title}>
      <PostDescription title={title} date={date} categories={categories} />
      <PostContent html={ html }/>
      <hr />
      <Comment />
    </Layout>
  )
}

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
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
`
export default PostTemplate
