// Card.test.jsx

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../src/card/Card.jsx';
import { RenderWithOutletContext } from './RenderWithOutletContext.jsx';

describe('Card component', () => {
  it('renders the card when passed data', () => {
    const mockOutletContext = {
      cartContents: [],
    };
    render(
      <RenderWithOutletContext context={mockOutletContext}>
        <Card
          id={products[0].id}
          title={products[0].title}
          price={products[0].price}
          description={products[0].description}
        />
      </RenderWithOutletContext>
    );
    expect(
      screen.getByText('Mens Casual Premium Slim Fit T-Shirts')
    ).toBeVisible();
  });
});

// Dummy data
const products = [
  {
    id: 0,
    category: "men's clothing",
    description:
      'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
    price: 22.3,
    rating: { rate: 4.1, count: 259 },
    title: 'Mens Casual Premium Slim Fit T-Shirts ',
  },
];
