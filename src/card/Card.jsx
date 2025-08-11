// Card.jsx
import styles from './Card.module.css';

export default function Card({ title, image, description, price, children }) {
  return (
    <>
      <div className={styles.cardContainer}>
        <h3>{title}</h3>
        <div className={styles.imgContainer}>
          <img src={image} alt={title} />
          <p>{description}</p>
        </div>
        {/* Force two digits after decimal place */}
        <h4>Price: ${(Math.round(price * 100) / 100).toFixed(2)}</h4>
        {children}
      </div>
    </>
  );
}
