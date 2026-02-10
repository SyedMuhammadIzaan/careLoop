import type { ApexOptions } from 'apexcharts';
import React from 'react'
import ReactApexChart from 'react-apexcharts';

const PieChartComp: React.FC = () => {
  const series = [40, 50, 60, 5];

  const options: ApexOptions = {
    chart: {
      type: 'pie',
    },
    labels: ['Completed Visits', 'Upcoming Visits', 'Cancelled Visits', 'First-Time Patients'],
    responsive: [
      {
        breakpoint: 768,
        options: {
          // chart: {
          //   width: '50%',
          // },
          legend: {
            position: 'bottom',
          },
        },

      },
    ],
    legend: {
      position: 'right',
    },
    dataLabels: {
      enabled: true,
    }
  }
  return (
    <>
      <ReactApexChart options={options} series={series} type="pie" width="100%" height={350} />
    </>
  )
}

export default PieChartComp