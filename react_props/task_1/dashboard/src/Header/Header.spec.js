import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
  test('renders logo image', () => {
    render(<Header />);
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('renders h1 with correct text', () => {
    render(<Header />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('School dashboard');
  });
});