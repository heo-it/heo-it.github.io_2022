import styled from '@emotion/styled'

export const PostListWrapper = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  justify-items: center;
  grid-gap: var(--size-600);

  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
    grid-gap: 0.1rem;
  }
`