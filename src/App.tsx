import React from 'react';
// import DoctorLayout from './layout/DoctorLayout';
// import Herobanner from './components/client/Herobanner.tsx';
// import Home from './pages/client/Home.tsx';
import AppRouter from './routes/AppRouter.tsx';

const App: React.FC = () => {
  // const [collapsed, setCollapsed] = useState(false);

  return (
    // <DoctorLayout
    //   collapsed={collapsed}
    //   onCollapse={setCollapsed}
    // />
    <>
    <AppRouter />
    {/* <Home /> */}
      {/* <Navbar />
      <div className='herobanner-container w-full'>
        <Herobanner />
      </div> */}
    </>
  );
}

export default App;
