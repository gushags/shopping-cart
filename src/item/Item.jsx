// Item.jsx
import styles from './Item.module.css';

export default function Item({ id, image, title, quantity, price }) {
  const subtotal = (Math.round(price * quantity * 100) / 100).toFixed(2);

  return (
    <>
      <div key={id} className={styles.ItemContainer}>
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <p>{quantity}</p>
        <p>{price}</p>
        <h4>${subtotal}</h4>
      </div>
    </>
  );
}
