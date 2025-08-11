// Home.jsx

import Navigation from '../navigation/Navigation';
import Button from '../button/Button';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = 'shop';
    navigate(path);
  };

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
        <Button label='Shop Now!' onClick={routeChange} />
      </div>
    </>
  );
}

export default Home;
