import './index.css';
import './lang/i18n';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { ThemeProvider } from './components/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
