// Shop.jsx

import { useState, useEffect } from 'react';
import Card from '../card/Card';
import styles from './Shop.module.css';

export default function Shop() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => json.filter((item) => item.category.includes('clothing')))
      .then((res) => setProducts(res));
  }, []);

  return (
    <>
      <div className={styles.shopContainer}>
        {products &&
          products.map((product) => (
            <Card
              id={product.id}
              products={products}
              key={product.id}
              title={product.title}
              image={product.image}
              description={product.description}
              price={product.price}
            />
          ))}
      </div>
    </>
  );
}
