// import React from 'react'

import PieChartComp from "../../components/charts/PieChart"
import StatisticComp from "../../components/Statistic"

const DoctorDashboard = () => {
  return (
    <>
      <div className="statistic-container">
        <StatisticComp />
      </div>
      <div className="chart-container grid grid-cols-1 md:border-2 md:border-green-300 md:grid-cols-2">
        <div className="current-progress-container border-2 sm:border-green-300">
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