import React, { FunctionComponent } from 'react'
import PostItem from './PostItem'
import {
  PostListWrapper
} from './PostList.style'
import {
  PostListItemType
} from 'types/PostItem.types'

type PostListProps = {
  posts: PostListItemType[]
}

const PostList: FunctionComponent<PostListProps> = function ({
  posts
}) {
  return (
    <PostListWrapper>
      {
        posts.map(({
          node: { id, frontmatter },
        }: PostListItemType) => (
          <PostItem 
            key={id}
            {...frontmatter}
          />
        ))
      }
    </PostListWrapper>
  )
}

export default PostList