// App.jsx

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './applayout/AppLayout.jsx';
import Home from './home/Home.jsx';
import Shop from './shop/Shop.jsx';
import Cart from './cart/Cart.jsx';

export default function App() {
  const [cartContents, setCartContents] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <AppLayout
              cartContents={cartContents}
              setCartContents={setCartContents}
              cartQuantity={cartQuantity}
              setCartQuantity={setCartQuantity}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
