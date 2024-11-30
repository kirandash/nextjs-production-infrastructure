import { fireEvent, render } from '@testing-library/react';

import '@testing-library/jest-dom';

import { Input } from './Input';

describe('Input Component', () => {
  it('renders with default placeholder', () => {
    const { getByPlaceholderText } = render(<Input />);
    expect(getByPlaceholderText('Type something...')).toBeInTheDocument();
  });

  it('handles onChange events', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(<Input onChange={handleChange} />);
    const input = getByPlaceholderText('Type something...');

    fireEvent.change(input, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalled();
  });
});
