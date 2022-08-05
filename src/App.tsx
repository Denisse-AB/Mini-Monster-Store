import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Navigation = lazy(() => import('./routes/navigation'));
const Home = lazy(() => import('./routes/home'));
const SubTotal = lazy(() => import('./routes/subtotal'));
const Checkout = lazy(() => import('./routes/checkout'));

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='subtotal' element={<SubTotal />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App;