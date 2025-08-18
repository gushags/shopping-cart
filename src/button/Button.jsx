// Button.jsx

import styles from './Button.module.css';

export default function Button({ label, id, onClick, style = styles.default }) {
  return (
    <button type='button' id={id} className={style} onClick={onClick}>
      {label}
    </button>
  );
}
