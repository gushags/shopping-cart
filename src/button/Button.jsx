// Button.jsx

import { useContext } from 'react';
import { QuantityContext } from '../contexts';

import styles from './Button.module.css';

export default function Button({ label, id, onClick, style = styles.default }) {
  const quantityData = useContext(QuantityContext);
  return (
    <button
      type='button'
      id={id}
      quantity={quantityData}
      className={style}
      onClick={onClick}
      disabled={!quantityData ? true : false}
    >
      {label}
    </button>
  );
}
