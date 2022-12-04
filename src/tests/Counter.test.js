import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Counter from '../components/App';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const msg = screen.getByText(/Counter/i);
  expect(msg).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialValue = screen.getByText(/0/i);
  expect(initialValue).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const incrementFunction = screen.getByText('+');
  userEvent.click(incrementFunction);
  const incrementedValue = screen.getByText(/1/i);
  expect(incrementedValue).toBeInTheDocument();

});

test('clicking - decrements the count', () => {
  const decrementFunction = screen.getByText('-');
  userEvent.click(decrementFunction);
  const decrementedValue = screen.getByText(/-1/i);
  expect(decrementedValue).toBeInTheDocument();
});
