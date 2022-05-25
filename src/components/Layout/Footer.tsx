import React, { FunctionComponent } from 'react'
import {
  StyledFooter,
  FooterWrapper,
  FooterAttribution
} from './Footer.style'

const Footer: FunctionComponent = function () {
  return (
    <StyledFooter>
      <FooterWrapper>
        <FooterAttribution>
          © 2022 허예진 Powered by &nbsp;
          <a href="https://www.gatsbyjs.com/">Gatsby</a>
        </FooterAttribution>
      </FooterWrapper>
    </StyledFooter>
  )
}

export default Footer;