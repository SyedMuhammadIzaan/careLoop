import React, { useState } from 'react';
import DoctorLayout from './layout/DoctorLayout';

const App:React.FC=()=> {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <DoctorLayout
      collapsed={collapsed}
      onCollapse={setCollapsed}
    />
  );
}

export default App;
