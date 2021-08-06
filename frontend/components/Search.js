import React, { useState } from 'react';
import styles from '../styles/Search.module.css';
import { useRouter } from 'next/router';

const Search = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    setSearch('');
    router.push(`/search/${search}`);
  };
  return (
    <div className={styles.container}>
      <form id={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <input
          type="search"
          placeholder="Search Product"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
