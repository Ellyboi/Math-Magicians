import React from 'react';
import styles from './calculator.module.css';
import Calculator from '../../components/Calculator/Calculator';

const CalculatorPage = () => (
  <div className={styles.wrapper}>
    <h2>Let&apos;s do some math!</h2>
    <Calculator />
  </div>
);

export default CalculatorPage;
