// Card.jsx
import { useState } from 'react';
import { QuantityContext } from '../contexts';
import styles from './Card.module.css';

export default function Card({
  id,
  title,
  image,
  description,
  price,
  children,
}) {
  const [quantity, setQuantity] = useState(0);

  const handleChange = (event) => {
    setQuantity(Number(event.target.value));
    if (event.target.value > 0) {
      const button = event.target.nextElementSibling;
      button.disabled = false;
      console.log('Now you can enable button');
    }
  };
  return (
    <>
      <div key={id} id={id} className={styles.cardContainer}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.imgContainer}>
          <img className={styles.shopImg} src={image} alt={title} />
          <p className={styles.description}>{description}</p>
        </div>
        {/* Force two digits after decimal place */}
        <h4 className={styles.price}>
          Price: ${(Math.round(price * 100) / 100).toFixed(2)}
        </h4>
        <div className='cartSection'>
          <label htmlFor='prodQuantity'>Quantity</label>
          <input
            className={styles.shopInput}
            id='prodQuantity'
            name='quantity'
            type='number'
            min='0'
            max='20'
            step='1'
            onChange={handleChange}
            value={quantity}
          />
          <QuantityContext value={quantity}>{children}</QuantityContext>
        </div>
      </div>
    </>
  );
}
