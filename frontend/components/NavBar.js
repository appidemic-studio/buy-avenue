import React, { useState } from 'react';
import style from '../styles/NavBar.module.css';
import Link from 'next/link';
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineAlignRight,
} from 'react-icons/ai';

const NavBar = () => {
  return (
    <div className={style.nav}>
      <div className={style.nav_container}>
        <ul className={style.menu}>
          <Link href="/products">
            <li className={style.product_list}>ALL PRODUCTS</li>
          </Link>
          <Link href="/blogs">
            <li>BLOGS</li>
          </Link>
        </ul>
        <div className={style.logo}>
          <Link href="/">
            <img src="/Logo.png" alt="Aesthetic Indian" />
          </Link>
        </div>
        <div className={style.hambg}>
          <AiOutlineAlignRight />
        </div>
        <ul className={style.menu}>
          <Link href="/about">
            <li>ABOUT</li>
          </Link>
          <Link href="/contact-us">
            <li>CONTACT US</li>
          </Link>
          <Link href="/user">
            <AiOutlineUser className={style.links} />
          </Link>
          <Link href="/user/cart">
            <AiOutlineShoppingCart className={style.links} />
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
