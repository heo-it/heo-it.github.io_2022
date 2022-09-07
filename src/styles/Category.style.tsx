import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const StyledCategoryList = styled.div`
  margin: 0rem 1rem 0rem 1rem;
  padding: 2rem;
  border: 0.1rem solid rgba(98, 92, 96, 0.3);
  border-radius: 0.5rem;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
`;