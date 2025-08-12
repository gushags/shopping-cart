// Cart.jsx

import Navigation from '../navigation/Navigation';
import Item from '../item/Item';
import styles from './Cart.module.css';

function Cart() {
  return (
    <>
      <Navigation />
      <div className={styles.cartContainer}>
        <Item />
        <Item />
        <Item />
      </div>
    </>
  );
}

export default Cart;
