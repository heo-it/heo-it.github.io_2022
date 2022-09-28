import styled from '@emotion/styled'

export const Content = styled.div`
  margin: 0 auto;
  padding: 1rem 0;
  word-wrap: break-word;

  h1, h2, h3 {
    letter-spacing: -0.01em;
    line-height: 1.2;
    font-weight: 600;
    margin-bottom: 0;
  }

  h1 {
    font-size: var(--size-600);
  }

  h2 {
    font-size: var(--size-550);
  }

  h3 {
    font-size: var(--size-500);
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
    font-size: var(--size-400);
    margin-top: 0.5em;
    margin-bottom: 0.5em;
  }

  ol,
  ul {
    margin: 0;
    margin-block-start: 0.6em;
    margin-block-end: 0.6em;

    p {
      margin: 0.5rem 0;
    }

    li {
      margin-block-start: 0.6em;
      margin-block-end: 0.6em;
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
    font-style: italic;
    display: block;
    color: rgba(120, 119, 116, 1);
    fill: rgba(120, 119, 116, 1);
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
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
    margin: 1em 0;
    padding-left: 1em;
    border-left: 3px solid rgb(55, 53, 47);

    p {
      margin: 0.5rem 0;
    }
  }

  code {
    margin: 0px 0.2rem 0px 0px;
    padding: 0.1rem 0.2rem;
    border-radius: 0.3rem;
    background: rgb(237, 237, 235);
    font-size: 95%;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue,
    helvetica, Ubuntu, roboto, noto, segoe ui, arial, sans-serif;
    color: rgb(218, 97, 91);
  }

  mark {
    background-color: rgba(250, 243, 221);
    padding: 0.1rem;
  }

  @media (max-width: 55rem) {
    width: 100%;
    padding: 1.5rem 0;
  }
`;