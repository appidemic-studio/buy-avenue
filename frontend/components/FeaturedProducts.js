import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/FeaturedProducts.module.css';

const FeaturedProducts = ({ products }) => {
  console.log(products);
  return (
    <div className={styles.container}>
      <h2>Our Most Valued Products</h2>
      <div className={styles.products}>
        {products.map((product) => (
          <div className={styles.product} key={product.id}>
            <Image
              src={product.Images[0].formats.thumbnail.url}
              alt={product.Slug}
              height={350}
              width={350}
            />
            <h3>{product.Name}</h3>
            <p>
              ${product.Price} <span>${product.Price + 50.0}</span>{' '}
            </p>
            <div className={styles.buttons}>
              <Link href="/product">
                <button>View Product</button>
              </Link>
              <Link href="/cart">
                <button>Add To Cart</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
