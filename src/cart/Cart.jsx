// Cart.jsx

import Navigation from '../navigation/Navigation';
import Item from '../item/Item';
import styles from './Cart.module.css';

export default function Cart() {
  return (
    <>
      <Navigation />
      <table
        border='0'
        cellspacing='0'
        cellpadding='0'
        className={styles.cartContainer}
      >
        <tr className={styles.bottomBorder}>
          <th>Product</th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        <Item
          id={PRODUCTS[0].id}
          image={PRODUCTS[0].image}
          title={PRODUCTS[0].title}
          price={PRODUCTS[0].price}
        />
        <Item
          id={PRODUCTS[0].id}
          image={PRODUCTS[0].image}
          title={PRODUCTS[0].title}
          price={PRODUCTS[0].price}
        />
        <tr>
          <td className={styles.noBorder}></td>
          <td className={styles.noBorder}></td>
          <td className={`${styles.noBorder} ${styles.fontBold}`}>Total</td>
          <td className={`${styles.noBorder} ${styles.fontBold}`}>$100.00</td>
        </tr>
      </table>
    </>
  );
}

// dummy data
const PRODUCTS = [
  {
    id: 0,
    category: "men's clothing",
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
    price: 22.3,
    rating: { rate: 4.1, count: 259 },
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
  },
  {
    id: 1,
    category: "men's clothing",
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
    price: 55.99,
    rating: { rate: 4.7, count: 500 },
    title: 'Mens Cotton Jacket',
  },
  {
    id: 2,
    category: "men's clothing",
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
    price: 12.3,
    rating: { rate: 4.1, count: 259 },
    title: 'Mens Premium Slim Fit T-Shirts ',
  },
  {
    id: 3,
    category: "men's clothing",
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
    price: 95.99,
    rating: { rate: 4.7, count: 500 },
    title: 'Mens Cotton Jacket',
  },
  {
    id: 4,
    category: "men's clothing",
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
    price: 52.3,
    rating: { rate: 4.9, count: 259 },
    title: 'Mens Casual Premium Fit T-Shirts ',
  },
  {
    id: 5,
    category: "men's clothing",
    description:
      'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
    price: 90.99,
    rating: { rate: 2.3, count: 500 },
    title: 'Mens Heavy Cotton Jacket',
  },
];
