import React from 'react';
import style from '../styles/NavBar.module.css';
import Link from 'next/link';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';

const NavBar = () => {
  return (
    <div className={style.nav}>
      <div className={style.nav_container}>
        {/*Logo*/}
        <Link href="/">
          <h2>Aesthetic Indian.</h2>
        </Link>
        <div className={style.links}>
          {/*Menu*/}
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/products">
              <li>Products</li>
            </Link>
            <Link href="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>

          {/*Account & Cart*/}
          <ul id={style.profile}>
            <Link href="/user">
              <li>
                <AiOutlineUser />
              </li>
            </Link>
            <Link href="/cart">
              <li>
                <AiOutlineShoppingCart />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
