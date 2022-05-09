import React, { FunctionComponent } from 'react'
import PostItem from './PostItem'
import {
  PostListWrapper
} from './PostList.style'

export type PostType = {
  node: {
    id: string,
    frontmatter: {
      title: string
      date: string
      summary: string
      categories: string[]
    }
  }
}

type PostListProps = {
  posts: PostType[]
}

const PostList: FunctionComponent<PostListProps> = function ({
  posts
}) {
  return (
    <PostListWrapper>
      {
        posts.map(({
          node: { id, frontmatter },
        }: PostType) => (
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