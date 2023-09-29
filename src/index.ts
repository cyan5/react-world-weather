// index.ts

import { createGlobalStyle } from "styled-components"

export const MainStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Raleway','Noto Sans JP', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    font-display: swap;
    color: #333;
    margin: 0;
    padding: 0;
  }
`
