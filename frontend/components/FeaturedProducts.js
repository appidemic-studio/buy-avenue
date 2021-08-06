import Link from 'next/link';
import styles from '../styles/FeaturedProducts.module.css';
import {
  AiOutlineShoppingCart,
  AiFillStar,
  AiOutlineHeart,
} from 'react-icons/ai';
import { BiWallet } from 'react-icons/bi';

const FeaturedProducts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        <Link href={'/product'}>
          <div className={styles.product}>
            <AiOutlineHeart className={styles.like} />
            <div className={styles.img_area}>
              <img
                src="/evil_eye_bracelet_removebg_preview_f0faf52327.png"
                alt="evil_eye_bracelet"
              />
            </div>

            <div className={styles.text_area}>
              <h3>Evil Eye Bracelet</h3>
              <span>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <p>4.5</p>
              </span>
              <p className={styles.price}>
                $35 <span>${35 + 50}</span>
              </p>

              <div className={styles.buttons}>
                <Link href={`/buy-now`}>
                  <span>
                    <BiWallet />
                    Buy Now
                  </span>
                </Link>
                <Link href="/user/cart">
                  <span>
                    <AiOutlineShoppingCart />
                    Add to Cart
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Link>

        <Link href={'/product'}>
          <div className={styles.product}>
            <AiOutlineHeart className={styles.like} />
            <div className={styles.img_area}>
              <img
                src="/hookah_removebg_preview_151beeee29.png"
                alt="indian_traditional_hookah"
              />
            </div>

            <div className={styles.text_area}>
              <h3>Indian Traditional Hookah</h3>
              <span>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <p>4.5</p>
              </span>
              <p className={styles.price}>
                $15 <span>${15 + 50}</span>
              </p>

              <div className={styles.buttons}>
                <Link href={`/buy-now`}>
                  <span>
                    <BiWallet />
                    Buy Now
                  </span>
                </Link>
                <Link href="/user/cart">
                  <span>
                    <AiOutlineShoppingCart />
                    Add to Cart
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Link>

        <Link href={'/product'}>
          <div className={styles.product}>
            <AiOutlineHeart className={styles.like} />
            <div className={styles.img_area}>
              <img
                src="/table_decor_removebg_preview_d5a5b93227.png"
                alt="luxurious_table_decor"
              />
            </div>

            <div className={styles.text_area}>
              <h3>Luxurious Table Decor</h3>
              <span>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <p>4.5</p>
              </span>
              <p className={styles.price}>
                $55 <span>${55 + 50}</span>
              </p>

              <div className={styles.buttons}>
                <Link href={`/buy-now`}>
                  <span>
                    <BiWallet />
                    Buy Now
                  </span>
                </Link>
                <Link href="/user/cart">
                  <span>
                    <AiOutlineShoppingCart />
                    Add to Cart
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Link>

        <Link href={'/product'}>
          <div className={styles.product}>
            <AiOutlineHeart className={styles.like} />
            <div className={styles.img_area}>
              <img
                src="/jute_bag_removebg_preview_1026c611b3.png"
                alt="handmade_jute_bags"
              />
            </div>

            <div className={styles.text_area}>
              <h3>Handmade Jute Bags</h3>
              <span>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <p>4.5</p>
              </span>
              <p className={styles.price}>
                $30 <span>${30 + 50}</span>
              </p>

              <div className={styles.buttons}>
                <Link href={`/buy-now`}>
                  <span>
                    <BiWallet />
                    Buy Now
                  </span>
                </Link>
                <Link href="/user/cart">
                  <span>
                    <AiOutlineShoppingCart />
                    Add to Cart
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
