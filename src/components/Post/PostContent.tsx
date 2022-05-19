import React, { FunctionComponent } from 'react'
import {
  Content
} from './PostContent.style'

type PostContentProps = {
  html: string
}

const PostContent: FunctionComponent<PostContentProps> = function ({
  html
}) {
  return (
    <Content dangerouslySetInnerHTML={{ __html: html }}/>
  )
}

export default PostContent;