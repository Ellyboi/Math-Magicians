import React, { useState } from 'react';
import styles from './quote.module.css';
import generateQuote from '../../logic/quotes';

const Quote = () => {
  const [quote, setQuote] = useState({
    quote:
      'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
    author: 'William Paul Thurston',
  });

  const handleClick = () => {
    setQuote(generateQuote());
  };

  return (
    <div className={styles.quote}>
      <p>
        {quote.quote}
        -
        {' '}
        <span className={styles.author}>{quote.author}</span>
      </p>
      <button type="button" className={styles.quoteBtn} onClick={handleClick}>
        Get a new quote
      </button>
    </div>
  );
};

export default Quote;
