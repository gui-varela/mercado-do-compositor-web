import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 1px ${(props) => props.theme['red-300']};
  }

  body {
    background-color: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-800']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, select, option {
    font: 400 1rem 'Open Sans', sans-serif;
  }

  h1, h2, h3, h4 {
    font-family: 'Frank Ruhl Libre', serif;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`
