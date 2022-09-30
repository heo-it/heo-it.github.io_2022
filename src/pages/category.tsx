import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout/Layout'
import Description from 'components/Layout/Description'
import {
  StyledCategoryList,
  StyledLink
} from 'styles/Category.style'

type GroupType = {
  fieldValue: string
  totalCount: number
}

type CategoryProps = {
  data: {
    allMarkdownRemark: {
      group: GroupType[]
    }
  }
}

const Category: FunctionComponent<CategoryProps> = function ({
  data: {
    allMarkdownRemark: {
      group
    }
  }
}) {
  return (
    <Layout title="category" description={`${group.length}개의 카테고리`}>
      <Description title="category" description={`${group.length}개의 카테고리`} />
      <StyledCategoryList>
        {group.map(({ fieldValue, totalCount}, index) => (
          <StyledLink to={`${fieldValue}`} key={index}>
            <span>{fieldValue}</span>
            {totalCount}
          </StyledLink>
        ))}
      </StyledCategoryList>
    </Layout>
  )
}

export const CategoryQuery = graphql`
  {
    allMarkdownRemark {
      group(field: frontmatter___categories) {
        fieldValue
        totalCount
      }
    }
  }
`

export default Category