import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('renders the Holberton logo', () => {
    render(<Header />);

    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('renders an h1 with the correct text', () => {
    render(<Header />);

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('School dashboard');
  });
});