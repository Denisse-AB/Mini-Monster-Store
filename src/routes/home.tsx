import { Outlet } from 'react-router-dom';
import Card from '../components/card/card';

const Home = () => {
  return (
    <div>
      <Card />
      <Outlet />
    </div>
  )
};

export default Home;