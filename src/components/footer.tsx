import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Container from './common/container'

const StyledFooter = styled.footer`
  padding-top: var(--size-300);
  padding-bottom: var(--size-300);
`;

const FooterAttribution = styled.p`
  font-size: var(--size-300);

  & a {
    color: inherit;
  }
`;

const FooterWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Footer: FunctionComponent = function () {
  return (
    <StyledFooter>
      <FooterWrapper>
        <FooterAttribution>
          © 2022 허예진 Powered by 
          <a href="https://www.gatsbyjs.com/">Gatsby</a>
        </FooterAttribution>
      </FooterWrapper>
    </StyledFooter>
  )
}

export default Footer;