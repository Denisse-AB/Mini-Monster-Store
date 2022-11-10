import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/cart-context/cart-context';
import monsters from './utils/product-data/product-data';
import Navigation from '../src/routes/navigation';
import HomeCard from '../src/components/home-card/home-card';
import HomeCardList from '../src/components/home-card-list/home-card-list';
import Checkout from './routes/checkout';
import SubTotal from './routes/subtotal';

function fireOnClickEvent (text:string) {
  fireEvent(
    screen.getByText(text),
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  )
}

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
  test('insert monster 1 in cart', () => {
    render(
      <BrowserRouter>
        <CartProvider>
          <HomeCardList monster={monsters[0]} />
          <Navigation />
          <Checkout />
        </CartProvider>
      </BrowserRouter>
    )
    screen.getByTestId('test-insert-item');

    fireOnClickEvent('Titanic Arms');

    const cartTotal = screen.getByTestId('test-total').textContent;
    expect(cartTotal).toBe('$25');

    const navigationCartCount = screen.getByTestId('test-cart-count')?.textContent;
    expect(navigationCartCount).toBe('1');

    const checkoutItem = screen.getByTestId('test-checkout-route').textContent;
    expect(checkoutItem).toContain('Titanic Arms');
  });

  test('insert 2 monsters in cart', () => {
    render (
      <BrowserRouter>
        <CartProvider>
          <HomeCard />
          <Navigation />
          <Checkout />
        </CartProvider>
      </BrowserRouter>
    )
    screen.getByTestId('test-insert-2-items');

    fireOnClickEvent('Titanic Arms');
    fireOnClickEvent('Dragon Monster');

    const cartTotal = screen.getByTestId('test-total').textContent;
    expect(cartTotal).toBe('$55');

    const navigationCartCount = screen.getByTestId('test-cart-count')?.textContent;
    expect(navigationCartCount).toBe('2');
  })
});

describe('the routes', () => {
  test('the subtotal route with no items in cart', () => {
    render(
      <BrowserRouter>
        <SubTotal />
      </BrowserRouter>
    )

    const subtotalRoute = screen.getByTestId('test-subtotal-route')?.textContent;
    expect(subtotalRoute).toContain('Your Cart Is Empty');
  });

  test('the checkout route with no items in cart', () => {
    render(
      <BrowserRouter>
        <Checkout />
      </BrowserRouter>
    )

    const subtotalRoute = screen.getByTestId('test-checkout-route')?.textContent;
    expect(subtotalRoute).toContain('Your Cart Is Empty');
  });
});
