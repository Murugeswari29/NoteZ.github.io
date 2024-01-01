import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import router from './utils/routes';
import App from './App';
import {
  RouterProvider,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>
);