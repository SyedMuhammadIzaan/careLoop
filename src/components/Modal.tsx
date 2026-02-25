import React, { memo } from 'react'
import type { ModalProps } from '../interface/ModalInterface'
import { Modal } from 'antd'
import TableComp from './TableComp'
import type { ColumnType } from 'antd/es/table'
import type { PatientRecordType } from '../types/patientTypes'

const ModalComp: React.FC<ModalProps> = ({ title, open, data, onOk, onCancel }) => {
    console.log("Modal Data", data)
    const visitColumns:ColumnType<PatientRecordType>[] = [
        {
            title:"Date",
            dataIndex:"date",
            key:"date"
        },
        {
            title:"Diagnosis",
            dataIndex:"diagnosis",
            key:"diagnosis"
        },
        {
            title:"Status",
            dataIndex:"status",
            key:"status"
        }
    ]
    // const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    //     console.log("Input changed", e.target.value)
    // }
    return (
        <>
            <Modal title={title} open={open} onOk={onOk} onCancel={onCancel} >
                {/* <h3>{title}</h3> */}
                <div className='modal-container w-full flex flex-col gap-2.5'>
                    <div className='patient-bio-wrapper border-2 bg-slate-200 grid grid-cols-2 gap-1.2 p-2 rounded-lg'>
                        <p className='col-span-1'>Name: <span>{data?.patientName}</span></p>
                        <p className='col-span-1'>Doctor: <span>{data?.doctorName}</span></p>
                        <p className='col-span-1'>Age: <span>{data?.age}</span></p>
                        <p className='col-span-1'>Gender: <span>{data?.gender}</span></p>
                        <p className='col-span-1'>Date: <span>{data?.date}</span></p>
                    </div>
                    <div className="illness-wrapper">
                        <TableComp columns={visitColumns} tableData={data?.visits || []} />

                    </div>
                </div>
            </Modal>
        </>
    )
}

export default memo(ModalComp)