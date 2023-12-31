import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer/Footer';

// type Props = {}

const MainLayout: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />

      <div className="main">
        <Outlet />
      </div>
      
      <Footer/>
    </div>
  );
}

export default MainLayout;