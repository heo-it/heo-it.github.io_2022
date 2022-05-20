import React, { FunctionComponent } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import styled from '@emotion/styled'

type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 7rem;
  height: 7rem;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 55rem) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({ 
  profileImage
}) {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export const ImageQuery = graphql`
  {
    file {
      childImageSharp {
        gatsbyImageData(width: 700)
      }
    }
  }
`

export default ProfileImage