import React from 'react';
import styles from './home.module.css';

const Home = () => (
  <section className={styles.section}>
    <h2 className={styles.h2}>Welcome to our page!</h2>
    <p className={styles.p}>
      Math Magicians is a project that allows the users to make simple
      calculations and read a ramdom math-related quote.
    </p>
  </section>
);

export default Home;
