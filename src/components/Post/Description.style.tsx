import styled from '@emotion/styled'

export const DescriptionWrappper = styled.div`
  padding: 1rem 0.5rem 0;
`;

export const ContentTitle = styled.h1`
  word-break: keep-all;
  padding: 1.3rem 0;
  line-height: 130%;

  @media screen and (max-width: 768px) {
    padding: 1rem 0;
  }
`

export const ContentDate = styled.span`
  font-size: var(--size-350);
  color: rgba(98, 92, 96, 0.7);
`