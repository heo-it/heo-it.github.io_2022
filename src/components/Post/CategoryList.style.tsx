import styled from "@emotion/styled"

const Category = styled.span`
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  font-size: var(--size-300);

  & a {
    position: relative;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 0.2rem 0.6rem;
    border: 1px solid rgba(230, 230, 230, 1);
    border-radius: 4px;
  }

  & a:hover {
    background-color: rgba(237, 85, 110, 0.7);
    color: rgba(255, 255, 255, 1);
  }
`;

export default Category