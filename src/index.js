import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// File: src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: #f7fafc;
}
