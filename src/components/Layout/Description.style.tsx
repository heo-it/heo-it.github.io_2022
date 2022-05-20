import styled from '@emotion/styled'

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--size-900);
  margin-bottom: var(--size-700);
  text-align: center;

  > h1 {
    font-size: var(--size-800);
    max-width: none;
    color: rgb(237, 85, 110);
  }

  > p {
    font-size: var(--size-400);
    margin-top: 15px;
  }
`

export default DescriptionWrapper