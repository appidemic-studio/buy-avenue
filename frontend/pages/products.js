import styles from '../styles/Products.module.css';
import Search from '../components/Search';
import Loader from '../components/Loader';
import Link from 'next/link';
import Image from 'next/image';

const products = ({ products }) => {
  return (
    <>
      <Loader />
      <Search />
      <div className={styles.container}>
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
    </>
  );
};

export default products;

export async function getStaticProps() {
  const res = await fetch(`http://localhost:1337/products`);
  const products = await res.json();
  return {
    props: { products },
  };
}
