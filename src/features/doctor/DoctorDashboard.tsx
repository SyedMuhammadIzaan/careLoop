// import React from 'react'

import PieChartComp from "../../components/charts/PieChart"
import StatisticComp from "../../components/Statistic"

const DoctorDashboard = () => {
  return (
    <>
      <div className="statistic-container">
        <StatisticComp />
      </div>
      <div className="chart-container w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        <div className="current-progress-container border-2">
          <PieChartComp />
        </div>
        <div className="previous-progress-container border-2">
          <PieChartComp />
        </div>
      </div>
    </>
  )
}

export default DoctorDashboard