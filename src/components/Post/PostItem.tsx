import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import {
  StyledPostListItem,
  PostListTitle,
  PostListExcerpt,
  PostListMeta
} from './PostItem.style'


type PostListProps = {
  title: string
  date: string
  categories: string[]
  summary: string
  thumbnail: string
  link: string
}

const PostItem: FunctionComponent<PostListProps> = function ({
  title,
  date,
  categories,
  summary,
  thumbnail,
  link
}) {
  return (
    <StyledPostListItem>
      {/* <Tags tags={categories} /> */}

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

        <span>{date} mins</span>
      </PostListMeta>
    </StyledPostListItem>
  )
}

export default PostItem