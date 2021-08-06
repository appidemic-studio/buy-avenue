import styles from '../styles/ErrorPage.module.css';

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <img src="/day26-rainbow.png" alt="Error Page" height={300} width={300} />
      <p>Sorry! We could not find that page for you.</p>
    </div>
  );
};

export default ErrorPage;
