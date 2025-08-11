import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Navigation from './navigation/Navigation.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import getAllProducts from './api/api.js';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

getAllProducts('src/Product.json');
