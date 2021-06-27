import Image from 'next/image';
import styles from '../../styles/User.module.css';
import Loader from '../../components/Loader';
import Link from 'next/link';

const user = () => {
  return (
    <>
      <Loader />
      <div className={styles.container}>
        <ul className={styles.navLinks}>
          <Link href="/user">
            <li>Your Profile</li>
          </Link>
          <Link href="/user/orders">
            <li>Your Orders</li>
          </Link>
          <Link href="/user/wishlist">
            <li>Your Wishlist</li>
          </Link>
        </ul>
        <div className={styles.showcase}></div>
      </div>
    </>
  );
};

export default user;
