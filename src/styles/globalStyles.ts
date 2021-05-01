import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    transition: background-color .4s ease-in-out;
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

  body, h1, h2, h3, h4, button, input {
    font-family: Montserrat, Verdana, Geneva, Tahoma, sans-serif;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
  }
`

export default GlobalStyle;