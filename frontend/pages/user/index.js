import styles from '../../styles/User.module.css';
import Link from 'next/link';

const user = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navLinks}>
        <Link href="/user">
          <li className={styles.active}>Your Profile</li>
        </Link>
        <Link href="/user/orders">
          <li>Your Orders</li>
        </Link>
        <Link href="/user/wishlist">
          <li>Your Wishlist</li>
        </Link>
      </ul>
      <div className={styles.showcase}>
        <div className={styles.avatar}>
          <span>
            <img src="/avatar.png" alt="User Avatar" />
          </span>
          <h3>Namaste John Doe!</h3>
        </div>
        <div className={styles.cred}>
          <p>Email: johndoe@gmail.com</p>
          <p>Phone: 6799645536</p>
          <p>Address: 1/23, Amherst Avenue</p>
        </div>
      </div>
    </div>
  );
};

export default user;
