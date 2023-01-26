import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

//Este código crea el elemento raíz de React para el elemento con ID 'root' en el DOM,
// luego renderiza la App dentro del modo estricto de React.
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
