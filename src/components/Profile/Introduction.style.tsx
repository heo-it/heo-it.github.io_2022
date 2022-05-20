import styled from '@emotion/styled'

export const StyledIntroduction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;

  @media (max-width: 55rem) {
    width: 100%;
    height: 300px;
    padding: 0 20px;
  }
`

export const IntroduceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 0 1.8rem;
  cursor: default;
`

export const Introduce = styled.p`
  font-size: var(--size-350);
  line-height: 110%;
  margin: var(--size-400) 0 var(--size-400);
`

export const Contact = styled.p`
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;

  > a {
    margin-right: 0.7rem;
  }
`