import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  test('renders 2 labels, 2 inputs and 1 button', () => {
    const { container } = render(<Login />);

    expect(container.querySelectorAll('label')).toHaveLength(2);
    expect(container.querySelectorAll('input')).toHaveLength(2);
    expect(container.querySelectorAll('button')).toHaveLength(1);
  });

  test('email label is associated with email input', () => {
    render(<Login />);

    const input = screen.getByLabelText(/email/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'email');
  });

  test('password label is associated with password input', () => {
    render(<Login />);

    const input = screen.getByLabelText(/password/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'password');
  });
});