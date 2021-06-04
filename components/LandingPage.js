import React from 'react';
import Image from 'next/image';
import style from '../styles/LandingPage.module.css';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <>
      <h2 id={style.soon}>Coming Soon...</h2>
      <div className={style.wrapper}>
        <div className={style.container}>
          <motion.h1
            animate={{ x: [-40, 0], opacity: [0, 1] }}
            transition={{ duration: 2, delay: 7 }}
          >
            Traditional indian products
          </motion.h1>
          <motion.h4
            animate={{ x: [-40, 0], opacity: [0, 1] }}
            transition={{ duration: 2, delay: 7 }}
          >
            handcrafted for you
          </motion.h4>
          <Link href="/products">
            <motion.button
              animate={{ x: [-40, 0], opacity: [0, 1] }}
              transition={{ duration: 1.5, delay: 7 }}
            >
              <AiOutlineShopping />
              Shop Now
            </motion.button>
          </Link>
        </div>
        <motion.div
          animate={{ x: [40, 0], opacity: [0, 1] }}
          transition={{ duration: 2, delay: 7 }}
          className={style.container}
        >
          <Image
            src="/flower_pots.jpg"
            alt="Evil Eye Bracelet"
            width={600}
            height={600}
          />
        </motion.div>
      </div>
    </>
  );
};

export default LandingPage;
