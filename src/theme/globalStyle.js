import { createGlobalStyle } from 'styled-components';
import { ColorScheme } from './styleConstants';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: ${ColorScheme.mainText};
    background: ${ColorScheme.accent};
    line-height: 1.6;
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: ${ColorScheme.primary};
    text-decoration: none;
    transition: color .2s ease;
    &:hover {
      color: ${ColorScheme.third};
      text-decoration: underline;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.25;
  }
`;

export default GlobalStyle;
