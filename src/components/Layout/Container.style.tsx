import styled from '@emotion/styled'

const Container = styled.div`
  width: 55rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  padding-left: var(--size-700);
  padding-right: var(--size-700);

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 5px;
    padding-right: 5px;
  }
`;

export default Container