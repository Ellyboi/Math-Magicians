import React from 'react';
import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator/Calculator';

describe('Calculator component test', () => {
  it('It should display a calculator with 19 button', () => {
    render(<Calculator />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(19);
  });
});
