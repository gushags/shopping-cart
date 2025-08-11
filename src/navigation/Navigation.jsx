// Navigation.jsx
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <nav>
        <Link to='/'>daBIGstore</Link>

        <div>
          <Link to='/shop'>Shop</Link>
          <Link to='/cart'>
            Cart <span>0</span>
          </Link>
        </div>
      </nav>
      <div className={styles.redText}>Navigation here</div>
    </>
  );
}

export default Navigation;
