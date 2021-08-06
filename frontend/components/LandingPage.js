import React from 'react';
import style from '../styles/LandingPage.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <>
      <motion.div
        animate={{ x: [-30, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className={style.wrapper}
      >
        <Link href="/products">
          <img src="/hero.jpg" />
        </Link>
      </motion.div>
    </>
  );
};

export default LandingPage;
