import React from 'react';
import styles from '../styles/Blogs.module.css';
import Link from 'next/link';

const blogs = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.blog}>
          <div className={styles.image_area}>
            <img
              src="/importance-of-zen-in-daily-life.png"
              alt="importance-of-zen-products"
            />
          </div>
          <div className={styles.text_area}>
            <h2>Importance of Zen Products in your daily life</h2>
            <p>
              Lets take a deep dive into the Zen culture and understand it's
              daily contribution to a healthy life.
            </p>
            <Link href="/blog">
              <a>Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blogs;
