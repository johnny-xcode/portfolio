import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import routes from './routes';

it('renders without crashing', () => {
  render(routes);
  expect(screen.getByText(/Hi! I'm Johnny/i)).toBeInTheDocument();
});
