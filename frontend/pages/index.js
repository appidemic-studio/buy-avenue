import Head from 'next/head';
import Loader from '../components/Loader';
import LandingPage from '../components/LandingPage';
import FeaturedProducts from '../components/FeaturedProducts';
import API_URL from '../config/index';

export default function Home({ products }) {
  return (
    <>
      <Loader />
      <div>
        <Head>
          <title>Buy Avenue | Buy Indian Home Decor at affordable prices</title>
          <meta
            name="description"
            content="Buy Avenue, online shop for home decor handcrafted from India"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <LandingPage />
        <FeaturedProducts products={products} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:1337/products?_limit=3`);
  const products = await res.json();
  return {
    props: { products },
  };
}
