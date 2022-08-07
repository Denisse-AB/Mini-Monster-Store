import { lazy, Suspense, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CartContext } from './context/cart-context/cart-context';

const Navigation = lazy(() => import('./routes/navigation'));
const Home = lazy(() => import('./routes/home'));
const SubTotal = lazy(() => import('./routes/subtotal'));
const Checkout = lazy(() => import('./routes/checkout'));
const ThankYou = lazy(() => import('./routes/thankyou'));

const App = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='subtotal' element={cartItems.length ? <SubTotal /> : <Navigate to="/" />} />
          <Route path='checkout' element={cartItems.length ? <Checkout /> : <Navigate to="/" />} />
          <Route path='thankyou' element={<ThankYou />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;