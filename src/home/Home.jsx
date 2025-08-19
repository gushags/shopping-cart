// Home.jsx

import Button from '../button/Button.jsx';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = 'shop';
    navigate(path);
  };

  return (
    <>
      <div className={styles.homepageBackground}></div>
      <div className={styles.homeContainer}>
        <h1 className={styles.welcome}>Welcome to theBIGstore!</h1>
        <h4 className={styles.sellText}>
          Paul lum deliquit, ponderibus modulisque suis ratio utitur. Nec
          dubitamus multa iter quae et nos invenerat. Lorem ipsum dolor sit
          amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut
          labore et dolore magna aliqua.
        </h4>
        <Button
          className={styles.shopButton}
          label='Shop Now!'
          onClick={routeChange}
        />
      </div>
    </>
  );
}
