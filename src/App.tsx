import React, { useState } from 'react';
import DoctorLayout from './layout/DoctorLayout';
import Navbar from './components/client/Navbar';

const App:React.FC=()=> {
  const [collapsed, setCollapsed] = useState(false);

  return (
    // <DoctorLayout
    //   collapsed={collapsed}
    //   onCollapse={setCollapsed}
    // />
    <Navbar />
  );
}

export default App;
