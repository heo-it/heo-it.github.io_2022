import styled from '@emotion/styled'

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--size-800);
  margin-bottom: var(--size-800);
  padding-left: 1.8rem;

  > h1 {
    font-size: var(--size-800);
    max-width: none;
  }

  > p {
    width: fit-content;
    font-size: var(--size-400);
    margin-top: 15px;
    padding: 0.1rem;
    color: #6a7280;
  }
`

export default DescriptionWrapper