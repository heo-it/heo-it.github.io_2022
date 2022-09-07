import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'
import { BiCategoryAlt, BiPurchaseTagAlt } from 'react-icons/bi'
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
          <Link to="/"><h2># {title}</h2></Link>
        </HeaderTitle>

        <StyledNav>
          <StyledNavListItem to="/blog">
            <BiCategoryAlt />
          </StyledNavListItem>

          <StyledNavListItem to="/category">
            <BiPurchaseTagAlt />
          </StyledNavListItem>
        </StyledNav>
      </HeaderWrapper>
    </StyledHeader>
  )
}

export default Header;