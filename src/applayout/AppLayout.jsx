// Take a look at this and see if this helps.

import styles from './AppLayout.module.css';
import { Outlet, Link } from 'react-router-dom';

export default function AppLayout({
  cartContents,
  setCartContents,
  cartQuantity,
  setCartQuantity,
}) {
  return (
    <>
      <header>
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
                Cart{' '}
                <span data-testid='cartTotal'>({cartContents.length})</span>{' '}
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <Outlet
          context={{
            cartContents,
            setCartContents,
            cartQuantity,
            setCartQuantity,
          }}
        />
      </main>
    </>
  );
}
