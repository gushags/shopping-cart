// Shop.jsx

import Navigation from '../navigation/Navigation';
import styles from './Shop.module.css';

function Shop() {
  return (
    <>
      <Navigation />
      <div className={styles.textGreen}>This is the Shopping page</div>
    </>
  );
}

export default Shop;
