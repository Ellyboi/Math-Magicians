import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../components/Button/Button';

describe('Button', () => {
  it('Should display a button with AC', () => {
    const symbol = 'AC';
    render(<Button symbole={symbol} handleClick={() => {}} />);
    const button = screen.getByRole('button');
    expect(button.innerHTML).toBe(symbol);
  });
});
