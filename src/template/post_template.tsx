import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout/Layout';

type PostTemplateProps = {

}

const PostTemplate: FunctionComponent<PostTemplateProps> = function (props) {
  console.log(props);

  return (
    <Layout>
      <div>PostTemplate</div>
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
