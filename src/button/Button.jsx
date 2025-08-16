// Button.jsx

import styles from './Button.module.css';

export default function Button({ label, id, onClick, style = styles.default }) {
  return (
    <button
      type='button'
      id={id}
      quantity={0}
      className={style}
      onClick={onClick}
      disabled={false}
    >
      {label}
    </button>
  );
}
