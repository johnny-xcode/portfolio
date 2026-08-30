import React from 'react';
import { createRoot } from 'react-dom/client';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

import GlobalStyle from './theme/globalStyle'

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    {routes}
  </React.StrictMode>
);
