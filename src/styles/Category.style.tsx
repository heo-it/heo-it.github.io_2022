import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const StyledCategoryList = styled.div`
  margin: 5rem 0 0;
  padding: 2rem;
  border: 0.var(--size-400) solid rgba(98, 92, 96, 0.3);
  border-radius: 0.5rem;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
  border-radius: var(--size-400);
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
`;