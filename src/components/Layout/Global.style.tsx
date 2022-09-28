import { css } from '@emotion/react'

const GlobalStyle = css`
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }
  html {
    height: -webkit-fill-available;
  }

  body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  html {
    width:100vw;
    overflow-x:hidden;
  }

  body::-webkit-scrollbar-thumb {
    background-color: rgba(55, 41, 44, .4);
  }

  body::-webkit-scrollbar-track {
    background: transparent;
  }

  :root {
    scroll-behavior: smooth;
    --size-300: 0.75rem;
    --size-350: 0.9rem;
    --size-400: 1rem;
    --size-500: 1.25rem;
    --size-550: 1.5rem;
    --size-600: 1.77rem;
    --size-700: 2.36rem;
    --size-800: 3.15rem;
    --size-900: 4.2rem;
  }

  body {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    color: #37292C;
    background-attachment: fixed;
  }

  h1,
  h2,
  h3,
  h4 {
    line-height: 1.125;
  }

  h1,
  h2,
  h3 {
    font-weight: 600;
  }

  h1 {
    font-size: var(--size-700);
  }

  h2 {
    font-size: var(--size-600);
  }

  h3 {
    font-size: var(--size-500);
  }

  p {
    font-size: var(--size-400);
  }

  hr {
    width: 100%;
    margin: var(--size-350) 0;
    border: 0.05rem solid rgba(241, 240, 233, 0.5);
  }

  ::selection {
    background: #d4e5eb;
  }

  p, li {
    max-width: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyle
