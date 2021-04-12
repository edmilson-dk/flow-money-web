import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
    display: block;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }
`

export default GlobalStyle;