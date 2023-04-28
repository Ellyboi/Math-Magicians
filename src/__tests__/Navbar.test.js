import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

describe('Navbar', () => {
  // Arrange
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );
  it('Should display the Navbar component with 3 links', () => {
    // Act
    const linkElement = screen.getAllByRole('link');
    // Assert
    expect(linkElement).toHaveLength(3);
  });
});
