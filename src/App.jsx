// App.jsx

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import AppLayout from './applayout/AppLayout';
import Home from './home/Home';
import Shop from './shop/Shop';
import Cart from './cart/Cart';

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
