// routes.jsx

import Home from './home/Home';
// import ErrorPage from './ErrorPage';
import Shop from './shop/Shop';
import Cart from './cart/Cart';

const routes = [
  {
    path: '/',
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: 'shop',
    element: <Shop />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
];

export default routes;
