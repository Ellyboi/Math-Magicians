import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => (
  <header>
    <nav>
      <h1 className={styles.logo}> Math Magicians </h1>
      <ul>
        <li>
          <Link className={styles.navLink} to="/">
            Home
          </Link>
        </li>
        <li className={styles.verticalLine} />
        <li>
          <Link className={styles.navLink} to="/calculator">
            Calculator
          </Link>
        </li>
        <li className={styles.verticalLine} />
        <li>
          <Link className={styles.navLink} to="/Quote">
            Quote
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
