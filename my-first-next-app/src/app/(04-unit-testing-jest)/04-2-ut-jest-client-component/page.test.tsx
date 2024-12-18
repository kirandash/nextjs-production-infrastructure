import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

import UnitTestingJest02 from './page';

describe('UnitTestingJest02', () => {
  it('renders initial state correctly', () => {
    render(<UnitTestingJest02 />);

    // Check if title is rendered
    const titleElement = screen.getByTestId('counter-title');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.textContent).toBe('Counter Component');

    // Check initial count
    const countDisplay = screen.getByTestId('count-display');
    expect(countDisplay.textContent).toBe('Count: 0');

    // Check if increment button exists
    expect(screen.getByTestId('increment-button')).toBeInTheDocument();

    // Check if input field exists
    expect(screen.getByTestId('name-input')).toBeInTheDocument();

    // Greeting should not be visible initially
    expect(screen.queryByTestId('greeting')).not.toBeInTheDocument();
  });

  it('increments counter when button is clicked', async () => {
    // Setup userEvent
    const user = userEvent.setup();
    render(<UnitTestingJest02 />);

    const incrementButton = screen.getByTestId('increment-button');

    // Replace fireEvent.click with userEvent.click
    await user.click(incrementButton);
    expect(screen.getByTestId('count-display').textContent).toBe('Count: 1');

    await user.click(incrementButton);
    expect(screen.getByTestId('count-display').textContent).toBe('Count: 2');
  });

  it('shows greeting when name is entered', async () => {
    // Setup userEvent
    const user = userEvent.setup();
    render(<UnitTestingJest02 />);

    const nameInput = screen.getByTestId('name-input');

    // Initially, greeting should not be visible
    expect(screen.queryByTestId('greeting')).not.toBeInTheDocument();

    // Replace fireEvent.change with userEvent.type
    await user.type(nameInput, 'Kiran Dash');

    // Greeting should now be visible with the entered name
    const greeting = screen.getByTestId('greeting');
    expect(greeting).toBeInTheDocument();
    expect(greeting.textContent).toBe('Hello, Kiran Dash!');
  });
});
