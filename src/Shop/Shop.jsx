// Shop.jsx

import Navigation from '../navigation/Navigation';
import { useState, useEffect } from 'react';
import Card from '../card/Card';
import Button from '../button/Button';
import styles from './Shop.module.css';
import { addToCartButton } from '/src/button/Button.module.css';

export default function Shop() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => json.filter((item) => item.category.includes('clothing')))
      .then((res) => setProducts(res));
  }, []);

  const addToCart = () => {
    console.log('Add this to the cart, please.');
  };

  return (
    <>
      <Navigation />
      <div className={styles.shopContainer}>
        {products &&
          products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
              price={product.price}
            >
              <Button
                label='Add to cart'
                style={addToCartButton}
                onClick={addToCart}
              />
            </Card>
          ))}
      </div>
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
