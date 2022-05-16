import styled from '@emotion/styled'

export const StyledIntroduction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
`

export const IntroduceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 0 1.8rem;
  cursor: default;
`

export const Name = styled.p`
  font-size: 2rem;
  font-weight: 600;
`

export const Introduce = styled.p`
  font-size: 0.9rem;
  line-height: 110%;
  margin: 1rem 0 1rem;
`

export const Contact = styled.p`
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;

  > a {
    margin-right: 0.7rem;
  }
`