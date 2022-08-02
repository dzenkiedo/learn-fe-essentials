import React from 'react';
import ReactDOM from 'react-dom/client';
import {MantineProvider} from "@mantine/core";
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        colorScheme: 'dark',
        components: {
          Container: {
            defaultProps: {
              sizes: {
                xs: 540,
                sm: 720,
                md: 1024,
                lg: 1140,
                xl: 1320,
              },
            },
          },
        },
      }}
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
    >
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
