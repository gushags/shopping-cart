// Button.test.jsx

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../src/button/Button';

describe('Button component', () => {
  it('renders correct label', () => {
    render(<Button label='Test Button' />);
    expect(screen.getByText('Test Button').textContent).toMatch(/test button/i);
  });

  it('calls the onClick handler when clicked', async () => {
    const handleClick = vi.fn();
    render(<Button label='Click Me' onClick={handleClick} />);
    await userEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
