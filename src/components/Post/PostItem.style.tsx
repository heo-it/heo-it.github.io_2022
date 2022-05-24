import styled from '@emotion/styled'

export const StyledPostListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(250, 250, 250, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 0 0.4rem rgb(0 0 0 / 20%);

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: 500px) {
    & {
      margin-top: var(--size-600);
    }
  }
`

export const PostListTitle = styled.h2`
  line-height: 1.2;
  margin-top: var(--size-400);
  margin-bottom: var(--size-400);
  text-transform: capitalize;
  font-size: var(--size-600);
  font-weight: 700;

  & a::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`

export const PostListExcerpt = styled.p`
  margin-top: auto;
  font-size: var(--size-350);
`

export const PostListMeta = styled.div`
  margin-top: 2rem;

  font-size: var(--size-300);
`