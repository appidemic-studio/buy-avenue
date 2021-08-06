import styles from '../../styles/User.module.css';
import Link from 'next/link';

const wishlist = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navLinks}>
        <Link href="/user">
          <li>Your Profile</li>
        </Link>
        <Link href="/user/orders">
          <li>Your Orders</li>
        </Link>
        <Link href="/user/wishlist">
          <li className={styles.active}>Your Wishlist</li>
        </Link>
      </ul>
      <div className={styles.showcase}>
        <div className={styles.avatar}>
          <span>
            <img src="/avatar.png" alt="User Avatar" />
          </span>
          <h3>Namaste John Doe!</h3>
        </div>
        <div className={styles.cred}>No Products in your wishlist</div>
      </div>
    </div>
  );
};

export default wishlist;
