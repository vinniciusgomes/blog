import { createGlobalStyle } from 'styled-components';

import { font } from './theme';

export default createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 16px = 1.6rem
  }
  
  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${font.family.Inter};
    font-weight: ${font.normal};
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: ${font.semiBold};
  }
  
  span {
    font-size: ${font.sizes.normal};
  }

  button {
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
