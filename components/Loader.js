import React, { useEffect } from 'react';
import style from '../styles/Loader.module.css';
import { motion } from 'framer-motion';

const Loader = ({ load }) => {
  const bounceTransition = {
    y: {
      duration: 0.4,
      yoyo: Infinity,
      ease: 'easeOut',
    },
  };

  return (
    <>
      {load && (
        <motion.div
          animate={{
            y: [0, -4000],
          }}
          transition={{ duration: 10, delay: 7.5, ease: 'easeOut' }}
          className={style.container}
        >
          <motion.div
            animate={{
              y: [0, -4000],
            }}
            transition={{ duration: 10, delay: 6, ease: 'easeOut' }}
            className={style.item1}
          ></motion.div>
          <motion.div
            animate={{
              y: [0, -4000],
            }}
            transition={{
              duration: 10,
              delay: 6.5,
              ease: 'easeOut',
            }}
            className={style.item2}
          >
            <motion.h1
              animate={{
                scale: ['80%', '100%'],
              }}
              transition={{ duration: 1.5 }}
            >
              Loading
            </motion.h1>
            <motion.span
              transition={bounceTransition}
              animate={{
                y: ['80%', '-100%'],
              }}
            ></motion.span>
            <motion.span
              transition={bounceTransition}
              animate={{
                y: ['80%', '-100%'],
              }}
            ></motion.span>
            <motion.span
              transition={bounceTransition}
              animate={{
                y: ['100%', '-100%'],
              }}
            ></motion.span>
          </motion.div>
          <motion.div
            animate={{
              y: [0, -4000],
            }}
            transition={{ duration: 10, delay: 7, ease: 'easeOut' }}
            className={style.item3}
          ></motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Loader;
