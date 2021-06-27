import React, { useState } from 'react';
import styles from '../styles/Search.module.css';

const Search = () => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
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
