// Card.jsx
import { useState } from 'react';
import styles from './Card.module.css';

export default function Card({
  id,
  title,
  image,
  description,
  price,
  children,
}) {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(Number(event.target.value));
  };
  return (
    <>
      <div key={id} className={styles.cardContainer}>
        <h3>{title}</h3>
        <div className={styles.imgContainer}>
          <img src={image} alt={title} />
          <p>{description}</p>
        </div>
        {/* Force two digits after decimal place */}
        <h4>Price: ${(Math.round(price * 100) / 100).toFixed(2)}</h4>
        <div className='cartSection'>
          <label htmlFor='quantity'>Quantity: </label>
          <input
            name='quantity'
            type='number'
            min='0'
            max='20'
            step='1'
            onChange={handleChange}
            value={value}
          />
          {children}
        </div>
      </div>
    </>
  );
}
