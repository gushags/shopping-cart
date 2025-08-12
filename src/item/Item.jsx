// Item.jsx
import styles from './Item.module.css';

export default function Item({ id, image, title, quantity = 1, price }) {
  return (
    <>
      {/* <div key={id} className={styles.itemContainer}>
        <img className={styles.image} src={image} alt={title} />
        <h4>{title}</h4>
        <p>{quantity}</p>
        <p>{(Math.round(price * 100) / 100).toFixed(2)}</p>
        <h4>${subtotal}</h4>
      </div> */}
      <tr key={id}>
        <td className={styles.imageTD}>
          <img className={styles.image} src={image} alt={title} />
        </td>
        <td>{title}</td>
        <td>{quantity}</td>
        <td>${(Math.round(price * quantity * 100) / 100).toFixed(2)}</td>
      </tr>
    </>
  );
}
