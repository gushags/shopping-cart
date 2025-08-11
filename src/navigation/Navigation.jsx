// Navigation.jsx
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <nav>
        <div className={styles.navContainer}>
          <Link to='/' className={styles.logo}>
            theBIGstore
          </Link>
          <div>
            <Link to='/' className={styles.pad}>
              Home
            </Link>
            <Link to='/shop' className={styles.pad}>
              Shop
            </Link>
            <Link to='/cart' className={styles.grow}>
              Cart <span>0</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
