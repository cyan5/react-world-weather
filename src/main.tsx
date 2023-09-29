// main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './mainStyle.ts'
import { Helmet, HelmetProvider } from 'react-helmet-async'
// import './App.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <HelmetProvider>
      <Helmet>
        <title>React World Weather</title>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet" />
      </Helmet>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
