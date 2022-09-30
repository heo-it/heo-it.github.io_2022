import styled from '@emotion/styled'

export const StyledPostListItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(250, 250, 250, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 0 0.4rem rgb(0 0 0 / 20%);

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: 768px) {
    & {
      margin-top: var(--size-500);
      padding: 1rem;
    }
  }
`

export const PostListTitle = styled.h2`
  line-height: 1.2;
  margin-top: var(--size-400);
  margin-bottom: var(--size-400);
  text-transform: capitalize;

  & a::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: var(--size-500);
    margin-bottom: var(--size-300);
  }
`

export const PostListExcerpt = styled.p`
  margin-top: auto;
  font-size: var(--size-350);
  color: #6a7280;

  @media screen and (max-width: 768px) {
    font-size: .875rem;
  }
`

export const PostListMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  font-size: var(--size-300);
  color: #6a7280;

  @media screen and (max-width: 768px) {
    font-size: var(--size-300);
    margin-top: var(--size-300);
  }
`