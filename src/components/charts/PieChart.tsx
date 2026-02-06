import type { ApexOptions } from 'apexcharts';
import React from 'react'

const PieChart:React.FC = () => {
    const series=[40,50,60];

    const options:ApexOptions={
        chart:{
            type:'pie',
        },
        labels:[]
    }
  return (
    <div>PieChart</div>
  )
}

export default PieChart