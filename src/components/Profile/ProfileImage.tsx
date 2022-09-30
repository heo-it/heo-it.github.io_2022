import React, { FunctionComponent } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import styled from '@emotion/styled'

type ProfileImageProps = {
  file: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

const ProfileImageWrapper = styled(GatsbyImage)`
  width: 7rem;
  height: 7rem;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

const ProfileImage: FunctionComponent = function () {

  const { file }: ProfileImageProps = useStaticQuery(
    graphql`
      query {
        file(name: { eq: "profile-image" }) {
          childImageSharp {
            gatsbyImageData(width: 120, height: 120)
          }
        }
      }
    `
  )

  return <ProfileImageWrapper image={file.childImageSharp.gatsbyImageData} alt="Profile Image" />
}

export default ProfileImage