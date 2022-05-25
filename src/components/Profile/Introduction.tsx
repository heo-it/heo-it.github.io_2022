import React, { FunctionComponent } from 'react'
import {
  StyledIntroduction,
  IntroduceWrapper,
  Introduce,
  Contact
} from './Introduction.style'
import ProfileImage from './ProfileImage'

const Introduction: FunctionComponent = function () {
  return (
    <StyledIntroduction>
      <ProfileImage />
      <IntroduceWrapper>
        <h1>허예진</h1>
        <Introduce>안녕하세요. 프론트엔드 개발자 허예진 입니다.</Introduce>
        <Contact>
          <a>📤 Mail</a>
          <a href='https://github.com/heo-it' target='_blank'>🔎 GitHub</a>
          <a href='https://www.instagram.com/heooo_yejin/' target='_blank'>🤡 Instagram</a>
        </Contact>
      </IntroduceWrapper>
    </StyledIntroduction>
  )
}

export default Introduction