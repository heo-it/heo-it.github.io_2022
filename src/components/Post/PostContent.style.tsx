import styled from '@emotion/styled'

export const Content = styled.div`
  margin: 0 auto;
  padding: 2.5rem 0;
  word-wrap: break-word;

  h1 {
    font-size: var(--size-600);
  }

  h2 {
    font-size: var(--size-500);
  }

  h3 {
    font-size: var(--size-400);
  }

  * + h1 {
    margin-top: var(--size-900);
  }

  * + h2 {
    margin-top: var(--size-800);
  }

  * + h3 {
    margin-top: var(--size-700);
  }

  p {
    font-size: var(--size-350);
    margin: var(--size-400) 0;
  }

  ol,
  ul {
    margin-top: 0;
    margin-bottom: 0;
    padding: 0 0 0 3rem;

    p {
      margin: 0.5rem 0;
    }
  }

  ul {
    list-style-type: disc;
    font-size: var(--size-350);
  }

  ul ul {
    list-style-type: circle;
  }

  ul ul ul {
    list-style-type: square;
  }

  ol {
    list-style-type: decimal;
  }

  hr {
    margin: 2rem 0;
  }

  a {
    font-weight: 700;
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  strong {
    font-weight: 700;
  }

  img {
    width: 100%;
    border-style: none;
    border-radius: var(--size-400);
  }

  em {
    font-size: 1.2rem;
    font-style: italic;
    display: block;
    text-align: center;
    margin: -1.5rem auto 0;
    word-break: keep-all;
  }

  table {
    display: table;
    border-collapse: collapse;
    margin: var(--size-400) 0;
  }

  thead {
    display: table-header-group;
    font-weight: 700;
  }

  tr {
    display: table-row;
  }

  th,
  td {
    display: table-cell;
    padding: var(--size-400);
  }

  blockquote {
    margin: 0.7rem 0;
    padding: 0.5rem 1.5rem;
    background: rgb(242, 242, 242);

    p {
      margin: 0.5rem 0;
    }
  }

  code {
    margin: 0px 0.2rem 0px 0px;
    padding: 0.2rem 0.5rem;
    border-radius: 0.3rem;
    background: rgb(230, 230, 230);
    font-size: 95%;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue,
    helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  }

  @media (max-width: 55rem) {
    width: 100%;
    padding: 1.5rem 0;
  }
`;