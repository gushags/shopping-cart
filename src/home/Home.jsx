// Home.jsx

import Navigation from '../navigation/Navigation';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <div className={styles.homepageBackground}>
        <div>Background Image</div>
        <div>Selling text</div>
        <button>Shop Now</button>
      </div>
    </>
  );
}

export default Home;
