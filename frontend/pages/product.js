import styles from '../styles/Product.module.css';
import {
  AiOutlineShoppingCart,
  AiFillStar,
  AiOutlineHeart,
} from 'react-icons/ai';

const productDetails = ({ product }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'slides',
    arrows: true,
  };
  return (
    <div className={styles.container}>
      <div className={styles.image_area}>
        <img src="/evil_eye_bracelet_removebg_preview_f0faf52327.png" />
      </div>
      <div className={styles.text_area}>
        <div className={styles.text_container}>
          <h1>EVIL EYE BRACELET</h1>
          <span>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <p>4.5</p>
          </span>
          <p className={styles.price}>Price: $65</p>
          <h3>Description:</h3>
          <p>
            Evil Eye is an ancient Greek symbol found in cups as old as 6th
            Century BC. It is believed to be a warder of evil thoughts and
            spirits directed towards the wearer. This enamel and zinc charm in
            signature blue colours comes with a stylish and protective blue
            macrame drawstring bracelet rakhi.
          </p>
          <p>In Stock: 7 left</p>
          <div className={styles.actions}>
            <button>Buy Now</button>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productDetails;
