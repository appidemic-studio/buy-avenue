import Head from 'next/head';
import LandingPage from '../components/LandingPage';
import styles from '../styles/Home.module.css';
import FeaturedProducts from '../components/FeaturedProducts';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Aesthetic Indian | Buy Indian Home Decor at affordable prices only at
          your Aesthetic Indian store
        </title>
        <meta
          name="description"
          content="Looking for exotic and traditional Indian products? Shop Now at Aesthetic Indian. Find products at affordable prices."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
      <div className={styles.featured}>
        <h2>Featured Products</h2>
        <FeaturedProducts />
        <Link href="/products">
          <button type="button">View All Products</button>
        </Link>
      </div>

      <div className={styles.about}>
        <div className={styles.image_area}>
          <img
            src="/products-handcrafted-for-you.jpg"
            alt="products-handcrafted-for-you"
          />
        </div>
        <div className={styles.text_area}>
          <h2>PRODUCTS HANDCRAFTED FOR YOU</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.image_area}>
          <img
            src="/products-handcrafted-for-you.jpg"
            alt="products-handcrafted-for-you"
          />
        </div>
        <div className={styles.text_area}>
          <h2>INGREDIENTS WE USE</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
      </div>
    </div>
  );
}
