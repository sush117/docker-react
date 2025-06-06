import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GitHub repo link', () => {
  render(<App />);
  const linkElement = screen.getByText(/view github repository/i);
  expect(linkElement).toBeInTheDocument();
});

