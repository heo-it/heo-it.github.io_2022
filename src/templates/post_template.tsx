import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout/Layout'
import PostContent from 'components/Post/PostContent'
import Description from 'components/Post/Description'
import PostImage from 'components/Post/PostImage'
import Comment from 'components/Post/Comment'
import { PostListItemType } from 'types/PostItem.types'

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
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
        }
      },
      timeToRead
    },
  } = edges[0]

  return (
    <Layout title={title}>
      <PostImage postImage={gatsbyImageData} />
      <Description title={title} date={date} categories={categories} timeToRead={timeToRead}/>
      <PostContent html={html}/>
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
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 730)
              }
            }
          }
          timeToRead
        }
      }
    }
  }
`
export default PostTemplate
