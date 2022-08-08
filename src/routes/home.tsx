import { Outlet } from 'react-router-dom';
import HomeCard from '../components/home-card/home-card';

const Home = () => {
  return (
    <div>
      <HomeCard />
      <Outlet />
    </div>
  )
};

export default Home;