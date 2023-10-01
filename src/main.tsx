// main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createGlobalStyle } from "styled-components"
import { Helmet, HelmetProvider } from 'react-helmet-async'
// import './App.css';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Raleway','M PLUS Rounded 1c','Noto Sans JP', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    font-display: swap;
    color: #333;
    margin: 0;
    padding: 0;
  }
`

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <HelmetProvider>
      <Helmet>
        <title>React World Weather</title>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&display=swap" rel="stylesheet"></link>
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
