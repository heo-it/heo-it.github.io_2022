import React, { FunctionComponent } from 'react'
import {
  StyledIntroduction,
  IntroduceWrapper,
  Contact,
} from './Introduction.style'
import MainBoard from './MainBoard'
import { FaGithub, FaMailBulk } from 'react-icons/fa';

const Introduction: FunctionComponent = function () {
  return (
    <StyledIntroduction>
      <IntroduceWrapper>
        <h1>Hello, I'm Yejin 💙</h1>
        <p></p>
      </IntroduceWrapper>
      <Contact>
        <a href='https://github.com/heo-it' target='_blank'>
          <FaGithub />
        </a>
        <a href='mailto:yee9705@gmail.com' target='_blank'>
          <FaMailBulk />
        </a>
      </Contact>
      <MainBoard />
    </StyledIntroduction>
  )
}

export default Introduction