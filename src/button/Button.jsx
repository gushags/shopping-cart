// Button.jsx

import styles from './Button.module.css';

export default function Button({
  label,
  id,
  onClick,
  style = styles.default,
  disabled = false,
}) {
  return (
    <button
      type='button'
      id={id}
      className={style}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
