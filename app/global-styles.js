import { createGlobalStyle } from 'styled-components';

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
    color: #fff;
  }

  #app {
    padding: 4vh;
    min-height: 100%;
    min-width: 100%;
    background: radial-gradient(ellipse at center, #ffbe0f 0%, #ffbe0f 40%, #FE7884 100%);
    position: relative;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
