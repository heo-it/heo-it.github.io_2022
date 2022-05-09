import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import CategoryList from 'components/Post/CategoryList'
import {
  StyledPostListItem,
  PostListTitle,
  PostListExcerpt,
  PostListMeta
} from './PostItem.style'


type PostItemProps = {
  key: string
  title: string
  date: string
  categories: string[]
  summary: string
}

const PostItem: FunctionComponent<PostItemProps> = function ({
  key,
  title,
  date,
  categories,
  summary,
}) {
  return (
    <StyledPostListItem>
      <CategoryList categories={categories} />

      <PostListTitle>
        <Link to={title}>{title}</Link>
      </PostListTitle>
      <PostListExcerpt
        dangerouslySetInnerHTML={{
          __html: summary,
        }}
      />
      <PostListMeta>
        <span>{date}</span>
      </PostListMeta>
    </StyledPostListItem>
  )
}

export default PostItem