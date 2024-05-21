import { render, screen } from '@testing-library/react';
import App from './App';

test('renders assignment heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/campaign evaluation tree$/i);
  expect(headingElement).toBeInTheDocument();
});
