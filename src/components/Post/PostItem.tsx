import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import CategoryList from 'components/Category/CategoryList'
import {
  StyledPostListItem,
  PostListTitle,
  PostListExcerpt,
  PostListMeta
} from './PostItem.style'
import {
  PostFrontmatterType
} from 'types/PostItem.types'

type PostItemProps = PostFrontmatterType & { link: string, timeToRead: number }

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  categories,
  summary,
  link,
  timeToRead
}) {
  return (
    <StyledPostListItem>
      <CategoryList categories={categories} />

      <PostListTitle>
        <Link to={link}>{title}</Link>
      </PostListTitle>
      <PostListExcerpt
        dangerouslySetInnerHTML={{
          __html: summary,
        }}
      />
      <PostListMeta>
        <span>{date}</span>
        <span>{timeToRead} min read</span>
      </PostListMeta>
    </StyledPostListItem>
  )
}

export default PostItem