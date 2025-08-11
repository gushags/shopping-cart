// Button.jsx

import styles from './Button.module.css';

export default function Button({ label, onClick, style = styles.default }) {
  return (
    <button type='button' className={style} onClick={onClick}>
      {label}
    </button>
  );
}
