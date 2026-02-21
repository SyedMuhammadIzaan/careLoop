// import React, { useState } from 'react'
import { Button, Space } from 'antd'
import type { ColumnType } from 'antd/es/table'
import TableComp from '../../components/TableComp'
import { patientRecordData } from '../../constants/patientRecord'
import type { ActionHandler } from '../../interface/TableActionInterface.ts';
import type { PatientRecordType } from '../../types/patientTypes.ts';
import { useState } from 'react';

const PatientDashboard = () => {
  const [tableData, setTableData] = useState<PatientRecordType[]>(patientRecordData);

  const handleEdit = (record: PatientRecordType) => {
    console.log("Edit record", record);
  }

  const handleDelete = (record: PatientRecordType) => {
    console.log("Delete record", record);
    const filterData = tableData.filter((item: PatientRecordType) => item.key !== record.key)
    setTableData(filterData);
  }

  const getPatientRecordColumns = ({ onEdit, onDelete }: ActionHandler): ColumnType<PatientRecordType>[] => [
    {
      title: "S.No",
      dataIndex: 'sno',
      key: 'sno'
    },
    {
      title: "Patient ID",
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: "Patient Name",
      dataIndex: 'patientName',
      key: 'patientName',
    },
    {
      title: "Age",
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: "Gender",
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: "Diagnosis",
      dataIndex: 'diagnosis',
      key: 'diagnosis',
    },
    {
      title: "Date",
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: "Action",
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button type='primary' onClick={() => onEdit(record)}>Edit</Button>
          <Button danger onClick={() => onDelete(record)}>Delete</Button>
        </Space>
      )
    }
  ]

  const columns = getPatientRecordColumns({
    onEdit: handleEdit,
    onDelete: handleDelete,
  })
  return (
    <div className='patient-container border-2 border-green-600 w-full h-full'>
      <div>
        <h3>Patient Record</h3>
      </div>
      <div className="patient-record-data">
        <TableComp tableData={patientRecordData} columns={columns} />
      </div>
    </div>
  )
}

export default PatientDashboard