import styles from '../../styles/User.module.css';
import Link from 'next/link';

const orders = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.navLinks}>
        <Link href="/user">
          <li>Your Profile</li>
        </Link>
        <Link href="/user/orders">
          <li className={styles.active}>Your Orders</li>
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
        <ol className={styles.cred}>
          <Link href="/user/order/:id">
            <li>
              <h3>1.</h3>
              <img
                src="/hookah_removebg_preview_151beeee29.png"
                alt="Order 1"
                height="100"
                width="100"
              />
              <div className={styles.details}>
                <p>Order #1234586</p>
                <p>Price: $120.00</p>
                <p>Qty. 1</p>
              </div>
              <button type="button">Track Order</button>
            </li>
          </Link>
          <Link href="/user/order/:id">
            <li>
              <h3>2.</h3>
              <img
                src="/hookah_removebg_preview_151beeee29.png"
                alt="Order 1"
                height="100"
                width="100"
              />
              <div className={styles.details}>
                <p>Order #2987541</p>
                <p>Price: $120.00</p>
                <p>Qty. 1</p>
              </div>
              <button type="button">Track Order</button>
            </li>
          </Link>
        </ol>
      </div>
    </div>
  );
};

export default orders;
