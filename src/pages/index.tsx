import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import Layout from 'components/Layout/Layout'
import PostList from 'components/Post/PostList'
import Introduction from 'components/Profile/Introduction'
import { IGatsbyImageData } from 'gatsby-plugin-image'

type IndexProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const IndexPage: FunctionComponent<IndexProps> = function({
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData }
    }
  }
}) {
  return (
    <Layout>
      <Introduction profileImage={ gatsbyImageData } />
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
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`;

export default IndexPage