import Head from 'next/head';
import LandingPage from '../components/LandingPage';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import { useState } from 'react';

export default function Home() {
  const [load, setLoad] = useState(true);

  return (
    <div>
      <Head>
        <title>Buy Avenue | Buy Indian Home Decor at affordable prices</title>
        <meta
          name="description"
          content="Buy Avenue, online shop for home decor handcrafted from India"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Loader load={load} />
      <NavBar />
      <LandingPage />
      <Footer />
    </div>
  );
}
