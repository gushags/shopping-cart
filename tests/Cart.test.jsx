// Cart.test.jsx

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Card from '../src/card/Card';
import Cart from '../src/cart/Cart';

describe('Cart component', () => {
  it('Renders correctly', () => {
    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );
    expect(screen.getByText('Product Name')).toBeVisible();
  });
});
