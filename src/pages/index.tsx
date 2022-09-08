import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import Layout from 'components/Layout/Layout'
import PostList from 'components/Post/PostList'
import Introduction from 'components/Profile/Introduction'

const IndexPage: FunctionComponent= function() {
  return (
    <Layout>
      <Introduction />
    </Layout>
  )
}

export default IndexPage