import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Intuitive box-sizing model with no margin */
  * {
    box-sizing: border-box;
    margin: 0;
  }

  /* Allow percentage-based heights in the application */
  html,
  body,
  #__next {
    height: 100%;
  }

  /* Add accessible line-height and improve text rendering */
  body {
    line-height: 1.5;
  }

  /* Avoid text overflows */
  * {
    overflow-wrap: break-word;
  }

  /* Treat media as layout elements and stop it from overflowing */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
`;

export default GlobalStyles;
