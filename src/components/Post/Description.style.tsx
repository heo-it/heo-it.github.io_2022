import styled from '@emotion/styled'

export const ContentTitle = styled.h1`
  word-break: keep-all;
  font-size: var(--size-600);
  font-weight: 600;
  padding: 1.5rem 0;
  line-height: 130%;
`

export const ContentDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContentDate = styled.span`
  font-size: var(--size-350);
  color: rgba(98, 92, 96, 0.7);
`
export const Line = styled.hr`
  width: 100%;
  margin: 0.9rem 0;
  border: 0.05rem solid rgba(241, 240, 233, 0.5);
`