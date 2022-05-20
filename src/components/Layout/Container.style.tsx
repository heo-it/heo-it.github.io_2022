import styled from '@emotion/styled'

const Container = styled.div`
  width: 55rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  padding-left: var(--size-700);
  padding-right: var(--size-700);

  @media screen and (max-width: 1000px) {
    & {
      padding-left: var(--size-400);
      padding-right: var(--size-400);
    }
  }
`;

export default Container