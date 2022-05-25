import React, { FunctionComponent } from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { PostImageWrapper } from './PostImage.style'

type PostImageProps = {
  postImage: IGatsbyImageData
}

const PostImage: FunctionComponent<PostImageProps> = function ({
  postImage
}) {
  return <PostImageWrapper image={postImage} alt="Post Image" />
}

export default PostImage