import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
  test('renders 2 labels, 2 inputs and 1 button', () => {
    const { container } = render(<Login />);

    expect(container.querySelectorAll('label')).toHaveLength(2);
    expect(container.querySelectorAll('input')).toHaveLength(2);
    expect(container.querySelectorAll('button')).toHaveLength(1);
  });

  test('focuses email input when email label is clicked', () => {
    render(<Login />);

    const label = screen.getByText(/email/i);
    const input = screen.getByLabelText(/email/i);

    fireEvent.click(label);

    expect(input).toHaveFocus();
  });

  test('focuses password input when password label is clicked', () => {
    render(<Login />);

    const label = screen.getByText(/password/i);
    const input = screen.getByLabelText(/password/i);

    fireEvent.click(label);

    expect(input).toHaveFocus();
  });
});