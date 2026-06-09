import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  test('renders copyright text with current year', () => {
    render(<Footer />);

    const year = new Date().getFullYear();

    expect(
      screen.getByText(`Copyright ${year} - Holberton School`)
    ).toBeInTheDocument();
  });
});