import React, { useState } from 'react';
// import DoctorLayout from './layout/DoctorLayout';
import Navbar from './components/client/Navbar';
import Herobanner from './components/client/Herobanner.tsx';
import Home from './pages/client/Home.tsx';

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    // <DoctorLayout
    //   collapsed={collapsed}
    //   onCollapse={setCollapsed}
    // />
    <>
    <Home />
      {/* <Navbar />
      <div className='herobanner-container w-full'>
        <Herobanner />
      </div> */}
    </>
  );
}

export default App;
