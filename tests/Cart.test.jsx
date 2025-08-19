// Cart.test.jsx

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Cart from '../src/cart/Cart';
import { RenderWithOutletContext } from './RenderWithOutletContext';

const mockOutletContext = {
  cartContents: [
    {
      id: 0,
      image: 'https://fakestoreapi.com/img/3.png',
      price: 22.3,
      title: 'Mens Slim',
      quantity: 2,
    },
    {
      id: 1,
      image: 'https://fakestoreapi.com/img/4.png',
      price: 10.5,
      title: 'Mens Shirt',
      quantity: 3,
    },
  ],
};

describe('Cart component', () => {
  it('Renders mocked component correctly', () => {
    render(
      <RenderWithOutletContext context={mockOutletContext}>
        <Cart />
      </RenderWithOutletContext>
    );
    expect(screen.getByText('Mens Slim')).toBeVisible();
  });

  it('Correctly calculates the total', () => {
    render(
      <RenderWithOutletContext context={mockOutletContext}>
        <Cart />
      </RenderWithOutletContext>
    );
    expect(screen.getByText('$76.10')).toBeVisible();
  });

  it('Renders a warning that the cart is empty if cartContents is empty', () => {
    const mockContext = {
      cartContents: [],
    };
    render(
      <RenderWithOutletContext context={mockContext}>
        <Cart />
      </RenderWithOutletContext>
    );
    expect(screen.getByText('The cart is empty.')).toBeVisible();
  });
});
