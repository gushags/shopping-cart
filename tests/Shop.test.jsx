// Shop.test.jsx

import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Shop from '../src/shop/Shop';

describe('Shop component with api call', () => {
  it('should display products correctly', async () => {
    const PRODUCTS = [
      {
        id: 0,
        category: 'clothing',
        description: 'Slim-fitting',
        title: 'Mens T-Shirt',
      },
      {
        id: 1,
        category: 'clothing',
        description: 'Great outerwear',
        title: 'Mens Jacket',
      },
    ];

    // Mock the global fetch function
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(PRODUCTS),
      })
    );
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Slim-fitting')).toBeVisible();
      expect(screen.getByText('Great outerwear')).toBeVisible();
    });
  });

  it('should update the cart when the "add to cart button" is clicked', async () => {
    const PRODUCTS = [
      {
        id: 0,
        category: 'clothing',
        description: 'Slim-fitting',
        title: 'Mens T-Shirt',
      },
    ];

    // Mock the global fetch function
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(PRODUCTS),
      })
    );
    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );

    // get the input element with the quantity and change the quanity to 1
    await waitFor(() => {
      const prodCount = screen.getByRole('spinbutton');
      fireEvent.change(prodCount, { target: { value: '1' } });
      // click the 'add to cart' button
      userEvent.click(screen.getByText('Add to cart'));
    });

    await waitFor(() => {
      expect(screen.getByTestId('cartTotal').textContent).toMatch('1');
    });
  });
});
