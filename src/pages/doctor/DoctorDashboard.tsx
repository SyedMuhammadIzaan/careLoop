// import React from 'react'
import type { TableColumnsType } from "antd";
import PieChartComp from "../../components/charts/PieChart.tsx";
import StatisticComp from "../../components/Statistic.tsx";
import TableComp from "../../components/TableComp.tsx";
import { data } from "../../constants/patientRecord.ts"
import type { DataType } from "../../types/patientTypes.ts";
import { useTableSearch } from "../../hooks/useTableSearch.tsx";

const DoctorDashboard = () => {
  const { getColumnSearchProps } = useTableSearch();

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      ...getColumnSearchProps('age'),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
  ];
  return (
    <>
      <div className="statistic-container mb-2">
        <StatisticComp />
      </div>
      <div className="chart-container grid grid-cols-1 border-2 border-blue-500 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="current-progress-container border-2 border-red-400 md:border-green-300">
          <PieChartComp />
        </div>
        <div className="previous-progress-container border-2 border-red-400 md:border-green-300">
          <PieChartComp />
        </div>
      </div>
      <div className="newly-patient-container mt-3 border-2">
        <div>
          <div className="header-wrapper border-2 border-yellow-400 text-xl font-bold mb-2">
            <h3>Newly Added Patients</h3>
          </div>
          <div className="table-wrapper">
            <TableComp tableData={data} columns={columns} />
          </div>
        </div>
      </div>
    </>
  )
}

export default DoctorDashboard