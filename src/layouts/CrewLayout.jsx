import { Outlet, useLocation } from 'react-router-dom';
import CrewNavbar from '../Admin/CrewNavbar';
import Footer from '../components/Footer';

// Layout to handle crew UI

const CrewLayout = () => {
  const location = useLocation();

  return (
    <>
      <CrewNavbar />
      <Outlet />
    </>
  );
};

export default CrewLayout;
