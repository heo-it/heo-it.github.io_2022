import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { BiCategoryAlt, BiPurchaseTagAlt, BiGame } from 'react-icons/bi'
import {
  StyledHeader,
  HeaderWrapper,
  HeaderTitle,
  StyledNav,
  StyledNavListItem
} from './Header.style'

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