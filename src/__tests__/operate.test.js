import operate from '../logic/operate';

describe('Operate function', () => {
  // Arrange
  const number1 = 8;
  const number2 = 5;
  const zero = 0;
  it('Addition', () => {
    // Act
    const result = operate(number1, number2, '+');
    // Assert
    expect(result).toBe('13');
  });
  it('Subtraction', () => {
    // Act
    const result = operate(number1, number2, '-');
    // Assert
    expect(result).toBe('3');
  });
  it('Multiplication', () => {
    // Act
    const result = operate(number1, number2, 'x');
    // Assert
    expect(result).toBe('40');
  });

  it('Division', () => {
    // Act
    const result = operate(number1, number2, '÷');
    // Assert
    expect(result).toBe('1.6');
  });

  it('Division by zero', () => {
    // Act
    const result = operate(number1, zero, '÷');
    // Assert
    expect(result).toBe('Can\'t divide by 0.');
  });

  it('Modulus', () => {
    // Act
    const result = operate(number1, number2, '%');
    // Assert
    expect(result).toBe('3');
  });

  it('Modulus of number by zero', () => {
    // Act
    const result = operate(number1, zero, '%');
    // Assert
    expect(result).toBe('Can\'t find modulo as can\'t divide by 0.');
  });
});
