import React from 'react';
import styles from '../../styles/Cart.module.css';
import Link from 'next/link';

const cart = () => {
  return (
    <div className={styles.cart}>
      <h2>Currently there is nothing in your cart</h2>
      <Link href="/products">
        <button type="button">Continue Shopping</button>
      </Link>
    </div>
  );
};

export default cart;
