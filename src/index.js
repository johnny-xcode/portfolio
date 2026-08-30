import React from 'react';
import { createRoot } from 'react-dom/client';
import routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routes}
  </React.StrictMode>
);
