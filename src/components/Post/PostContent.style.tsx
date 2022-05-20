import styled from '@emotion/styled'

export const Content = styled.div`
  margin: 0 auto;
  padding: 2.5rem 0;
  word-wrap: break-word;

  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 120%;
  }

  h1 {
    font-size: 2.8rem;
    margin-bottom: 2.7rem;
  }

  h2 {
    font-size: 2.3rem;
    margin-bottom: 2.4rem;
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  * + h1 {
    margin-top: 5.4rem;
  }

  * + h2 {
    margin-top: 4.8rem;
  }

  * + h3 {
    margin-top: 4rem;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  p {
    margin: 1rem 0;
  }

  blockquote {
    margin: 0.7rem 0;
    padding: 0.5rem 1.5rem;

    p {
      margin: 0.5rem 0;
    }
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

  details {
    summary {
      cursor: pointer;
    }
  }

  hr {
    margin: 3.5rem 0;
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
  }

  code {
    background: #e9ecef;
  }
`;