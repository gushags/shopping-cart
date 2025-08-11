// Home.jsx

import Navigation from '../navigation/Navigation';
import styles from './Home.module.css';

function Home() {
  return (
    <>
      <Navigation />
      <div className={styles.homepageBackground}></div>
      <div className={styles.homeContainer}>
        <h1>Welcome to theBIGstore!</h1>
        <h4 className={styles.sellText}>
          Paullum deliquit, ponderibus modulisque suis ratio utitur. Nec
          dubitamus multa iter quae et nos invenerat. Lorem ipsum dolor sit
          amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut
          labore et dolore magna aliqua.
        </h4>
        <button>Shop Now</button>
      </div>
    </>
  );
}

export default Home;
