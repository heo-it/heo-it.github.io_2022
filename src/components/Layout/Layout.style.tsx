
import styled from '@emotion/styled'

const LayoutWrapper = styled.div`
  min-height: 100vh;
  padding: 5rem 0 0;
  display: flex;
  flex-direction: column;

  & main {
    margin-top: auto;
    margin-bottom: auto;
  }

  & footer {
    margin-top: auto;
  }

  @media (max-width: 768px) {
    padding: 4rem 5px 0 5px;
  }
`

export default LayoutWrapper