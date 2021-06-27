import React, { useEffect } from 'react';
import style from '../styles/Loader.module.css';
import { motion } from 'framer-motion';

const Loader = () => {
  const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: 'easeOut',
    },
  };

  return (
    <motion.div
      animate={{ y: [0, -1000] }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className={style.container}
    ></motion.div>
  );
};

export default Loader;
