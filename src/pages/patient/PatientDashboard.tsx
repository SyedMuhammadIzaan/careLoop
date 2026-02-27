// import React, { useState } from 'react'
import { Button, Space } from 'antd'
import type { ColumnType } from 'antd/es/table'
import TableComp from '../../components/TableComp.tsx'
import { patientRecordData } from '../../constants/patientRecord.ts'
import type { ActionHandler } from '../../interface/TableActionInterface.ts';
import type { PatientRecordType } from '../../types/patientTypes.ts';
import { useCallback, useState } from 'react';
import ModalComp from '../../components/Modal.tsx';

const PatientDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedRecord, setSelectedRecord] = useState<PatientRecordType | null>(null);
  const [tableData, setTableData] = useState<PatientRecordType[]>(patientRecordData);
  
  const handleEdit = useCallback((record: PatientRecordType) => {
    console.log("Edit record", record);
    setSelectedRecord(record);
    setIsModalOpen(true);
  }, [])

  const handleOk = useCallback(() => {
    setTimeout(() => {
      setIsModalOpen(false);
    }, 1000);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    setSelectedRecord(null);
  }, [])

  const handleDelete = (record: PatientRecordType) => {
    console.log("Delete record", record);
    setTableData((prev) => prev.filter((item:PatientRecordType) => item.key !== record.key));
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
      title: "Doctor Name",
      dataIndex: 'doctorName',
      key: 'doctorName',
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
    <div className='patient-container w-full h-full'>
      <div>
        <h3 className='text-2xl font-bold mb-3'>Patient Record</h3>
      </div>
      <div className="patient-record-data overflow-auto ">
        <TableComp tableData={tableData} columns={columns} />
        <ModalComp title="Patient Details" open={isModalOpen} data={selectedRecord} onOk={handleOk} onCancel={handleModalClose} />
      </div>
    </div>
  )
}

export default PatientDashboard