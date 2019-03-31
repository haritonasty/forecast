import { createGlobalStyle } from 'styled-components';
import { colorTheme } from './utils/style';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    color: ${colorTheme.base};
  }

  #app {
    min-height: 100%;
    min-width: 100%;
    position: relative;
    background: #F78167;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(150deg, #FCA5F1 0%, #FC7D7B 100%);
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
