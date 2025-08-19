// Cart.jsx

import Item from '../item/Item';
import Button from '../button/Button';
import buttonStyles from '../button/Button.module.css';
import styles from './Cart.module.css';
import { useOutletContext } from 'react-router';

export default function Cart() {
  const { cartContents } = useOutletContext(); // use this data to populate

  const totalPrice = cartContents.reduce((acc, product) => {
    return acc + product.quantity * product.price;
  }, 0);
  return (
    <>
      {cartContents.length > 0 ? (
        <>
          <table
            border='0'
            cellSpacing='0'
            cellPadding='0'
            className={styles.cartContainer}
          >
            <thead>
              <tr className={styles.bottomBorder}>
                <th>Product</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartContents.map((product) => (
                <Item
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  quantity={product.quantity}
                  price={product.price}
                />
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className={styles.noBorder}></td>
                <td className={styles.noBorder}></td>
                <td className={styles.noBorder}></td>
                <td className={styles.noBorder}></td>
                <td className={`${styles.noBorder} ${styles.fontBold}`}>
                  ${(Math.round(totalPrice * 100) / 100).toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
          <div className={styles.checkout}>
            <Button label='Checkout' style={buttonStyles.checkout} />
          </div>
        </>
      ) : (
        // render this if cart is empty
        <table
          border='0'
          cellSpacing='0'
          cellPadding='0'
          className={styles.cartContainer}
        >
          <th>
            <tr>
              <td className={styles.noBorder}>The cart is empty.</td>
            </tr>
          </th>
        </table>
      )}
    </>
  );
}
