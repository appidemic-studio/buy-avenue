import styles from '../styles/ErrorPage.module.css';
import Image from 'next/image';
import Loader from '../components/Loader';

const ErrorPage = () => {
  return (
    <>
      <Loader />
      <div className={styles.container}>
        <Image
          src="/day26-rainbow.png"
          alt="Error Page"
          height={300}
          width={300}
        />
        <h2>Sorry! We could not find that page for you.</h2>
      </div>
    </>
  );
};

export default ErrorPage;
