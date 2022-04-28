import React, { FunctionComponent } from 'react'
import Container from './common/container'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { BiCategoryAlt, BiPurchaseTagAlt, BiGame } from 'react-icons/bi'

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  background: linear-gradient(to left, #6868ac, #e9435e, #ecc371);
  animation: gradient 20s ease infinite;
  padding-top: var(--size-300);
`;

const HeaderWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.div`
  & a {
    text-transform: uppercase;
    text-decoration: none;
    font-size: var(--size-400);
    color: white;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  position: static;
  padding: 0;
  background: transparent;
  backdrop-filter: unset;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledNavListItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  height: 3.5rem;
  width: 3rem;
  margin: 0 0 0 1rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    fill: rgba(255, 255, 255, 0.9);
  }
`;

type HeaderProps = {
  title: string
}

const Header: FunctionComponent<HeaderProps> = function ({ title }) {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <HeaderTitle>
          <Link to="/"><h3># {title}</h3></Link>
        </HeaderTitle>

        <StyledNav>
          <StyledNavListItem to="/blog">
            <BiCategoryAlt />
          </StyledNavListItem>

          <StyledNavListItem to="/tags">
            <BiPurchaseTagAlt />
          </StyledNavListItem>

          <StyledNavListItem to="/about">
            <BiGame />
          </StyledNavListItem>
        </StyledNav>
      </HeaderWrapper>
    </StyledHeader>
  )
}

export default Header;