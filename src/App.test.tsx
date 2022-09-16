import { fireEvent, getByText, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/cart-context/cart-context';
import monsters from './utils/product-data/product-data';
import Navigation from '../src/routes/navigation';
import HomeCardList from '../src/components/home-card-list/home-card-list';
import Checkout from './routes/checkout';

it('is searching the monster object', () => {
  expect(monsters[3].id).toBe(4);
  expect(monsters[0].price).toBe(25);

  // The quantity value in the monster object should be 0.
  for (let i = 0; i < monsters.length; i++) {
    const obj = monsters[i]['quantity'];
    expect(obj).toBe(0)
  }
});

describe('the cart', () => {
  test('insert monster 1 in cart when clicked', () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <HomeCardList monster={monsters[0]} />
          <Navigation />
          <Checkout />
        </CartProvider>
      </BrowserRouter>
    )
    const div =  screen.getByTestId('test-insert-item');

    fireEvent(
      getByText(div, 'Titanic Arms'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )

    const cartTotal = screen.getByTestId('test-total').textContent;
    expect(cartTotal).toBe('$25');

    const navigationCartCount = screen.getByTestId('test-cart-count')?.textContent;
    expect(navigationCartCount).toBe('1');

    const checkoutItem = screen.getByTestId('test-checkout-route').textContent;
    expect(checkoutItem).toContain('Titanic Arms');
  });
  // TODO: INSERT 2 ITEMS IN CART
});
