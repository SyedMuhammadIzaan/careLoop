// import React from 'react'
import PieChartComp from "../../components/charts/PieChart"
import StatisticComp from "../../components/Statistic"
import TableComp from "../../components/TableComp"
import { columns, data } from "../../constants/patientRecord.jsx";

const DoctorDashboard = () => {
  return (
    <>
      <div className="statistic-container mb-2">
        <StatisticComp />
      </div>
      <div className="chart-container grid grid-cols-1 border-2 border-blue-500 sm:border-green-300 md:grid-cols-2">
        <div className="current-progress-container border-2 border-red-400 md:border-green-300">
          <PieChartComp />
        </div>
        <div className="previous-progress-container border-2 border-red-400 md:border-green-300">
          <PieChartComp />
        </div>
      </div>
      <div className="newly-patient-container mt-3 border-2">
        <TableComp tableData={data} columns={columns} />
      </div>
    </>
  )
}

export default DoctorDashboard