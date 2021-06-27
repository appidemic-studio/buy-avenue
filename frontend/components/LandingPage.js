import React from 'react';
import Image from 'next/image';
import style from '../styles/LandingPage.module.css';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <>
      <motion.div
        animate={{ x: [-40, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className={style.wrapper}
      >
        <Image src="/Hero.webp" height="850" width="1920" priority="true" />
        <Link href="/products">
          <button>
            <a>
              <AiOutlineShopping />
            </a>
            Shop Now
          </button>
        </Link>
      </motion.div>
    </>
  );
};

export default LandingPage;
