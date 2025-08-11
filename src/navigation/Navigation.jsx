// Navigation.jsx
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <nav>
        <Link to='/' className={styles.logo}>
          daBIGstore
        </Link>
        <div>
          <Link to='/' className={styles.pad}>
            Home
          </Link>
          <Link to='/shop' className={styles.pad}>
            Shop
          </Link>
          <Link to='/cart'>
            Cart <span>0</span>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
