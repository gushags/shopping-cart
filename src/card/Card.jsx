// Card.jsx

import styles from './Card.module.css';
import Button from '../button/Button';
import buttonStyle from '../button/Button.module.css';
import { useOutletContext } from 'react-router';
import { useState } from 'react';

export default function Card({
  id,
  title,
  image,
  description,
  price,
  products,
}) {
  const [quantity, setQuantity] = useState(0);
  const { cartContents, setCartContents } = useOutletContext();

  const handleChange = (event) => {
    setQuantity(Number(event.target.value));
    const button = event.target.nextElementSibling;
    if (event.target.value > 0) {
      button.disabled = false;
    }
  };

  const addToCart = (event) => {
    const clickedButton = event.target;
    const productID = clickedButton.id;
    const quantity = clickedButton.previousElementSibling.value;
    const q = Number(quantity);

    // find the product in the array and save to memory
    const index = products.findIndex((product) => product.id == productID);
    let selection = products[index];
    let newSelection = { ...selection, quantity: q };

    // update the cart with the new selection, including quantity
    setCartContents([...cartContents, newSelection]);

    // set the quantity input field to 0
    setQuantity(0);
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
            value={quantity} // controls whether button is disabled or not
          />
          <Button
            id={id}
            label='Add to cart'
            style={
              quantity ? buttonStyle.addToCartButton : buttonStyle.disabledCart
            }
            onClick={addToCart}
            disabled={quantity ? false : true}
          />
        </div>
      </div>
    </>
  );
}
