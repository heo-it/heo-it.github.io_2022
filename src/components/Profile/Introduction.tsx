import React, { FunctionComponent } from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import {
  StyledIntroduction,
  IntroduceWrapper,
  Name,
  Introduce,
  Contact
} from './Introduction.style'
import ProfileImage from './ProfileImage'

type IntroductionProps = {
  profileImage: IGatsbyImageData
}

const Introduction: FunctionComponent<IntroductionProps> = function ({
  profileImage
}) {
  return (
    <StyledIntroduction>
      <ProfileImage profileImage={profileImage} />
      <IntroduceWrapper>
        <Name>허예진</Name>
        <Introduce>안녕하세요. 프론트엔드 개발자 허예진 입니다.</Introduce>
        <Contact>
          <a>Mail</a>
          <a>GitHub</a>
        </Contact>
      </IntroduceWrapper>
    </StyledIntroduction>
  )
}

export default Introduction