import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react'
import {
  PostListItemType
} from 'types/PostItem.types'
import Layout from 'components/Layout/Layout'
import PostList from 'components/Post/PostList'
import Description from 'components/Layout/Description'

type CategoryTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
  pageContext: {
    fieldValue: string
    totalCount: number
  }
}

const CategoryTemplate: FunctionComponent<CategoryTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges }
  },
  pageContext: { fieldValue, totalCount }
}) {
  return (
    <Layout>
      <Description title={fieldValue} description={`${totalCount}개의 게시글`} />
      <PostList posts={ edges } />
    </Layout>
  )
}

export const CategoryTemplateQuery = graphql`
  query queryMarkdownDataByCategory($fieldValue: String) {
    allMarkdownRemark(filter: {frontmatter: {categories: {eq: $fieldValue } } }){
      edges {
        node {
          id
          fields {
            slug
          }
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

export default CategoryTemplate