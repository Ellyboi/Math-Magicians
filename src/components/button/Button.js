import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({ symbole, className, handleClick }) => (
  <button type="button" className={styles[className]} onClick={handleClick}>
    {symbole}
  </button>
);

Button.propTypes = {
  symbole: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = { className: '' };

export default Button;
