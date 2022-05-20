import styled from '@emotion/styled'

export const PostListWrapper = styled.div`
  padding: 0;
  list-style: none;
  display: grid;
  justify-items: center;
  grid-gap: var(--size-600);
  grid-template-columns: repeat(auto-fit, minmax(35ch, 1fr));

  @media (max-width: 60rem) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`