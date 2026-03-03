import React, { memo, useEffect, useState } from 'react'
import type { ModalProps } from '../interface/ModalInterface'
import { Modal } from 'antd'
import TableComp from './TableComp'
import type { ColumnType } from 'antd/es/table'
import type { PatientRecordType } from '../types/patientTypes'
import InputComp from './Input'
import SelectComp from './Select'
import type { Profile } from '../interface/profileInterface'

const ModalComp: React.FC<ModalProps> = ({ type, title, open, data, onOk, onCancel }) => {
    const [formData,setFormData]=useState<Profile | null>(null);
    console.log("Modal Data", data)
    useEffect(() => {
        if(data && type === "doctor"){
            setFormData(Array.isArray(data) ? data[0] : (data as Profile))
        }
    }, [data, type]);

    const visitColumns: ColumnType<PatientRecordType>[] = [
        {
            title: "Date",
            dataIndex: "date",
            key: "date"
        },
        {
            title: "Diagnosis",
            dataIndex: "diagnosis",
            key: "diagnosis"
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status"
        }
    ]
    // const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    //     console.log("Input changed", e.target.value)
    // }
    return (
        <>
            <Modal title={title} open={open} onOk={() =>onOk(formData)} onCancel={onCancel} >
                {type === "patient"
                    ?
                    <div className='modal-container w-full flex flex-col gap-2.5'>
                        <div className='patient-bio-wrapper border-2 bg-slate-200 grid grid-cols-2 gap-1.2 p-2 rounded-lg'>
                            <p className='col-span-1'>Name: <span>{(data as PatientRecordType)?.patientName}</span></p>
                            <p className='col-span-1'>Doctor: <span>{(data as PatientRecordType)?.doctorName}</span></p>
                            <p className='col-span-1'>Age: <span>{(data as PatientRecordType)?.age}</span></p>
                            <p className='col-span-1'>Gender: <span>{(data as PatientRecordType)?.gender}</span></p>
                            <p className='col-span-1'>Date: <span>{(data as PatientRecordType)?.date}</span></p>
                        </div>
                        <div className="illness-wrapper">
                            <TableComp columns={visitColumns} tableData={(data as PatientRecordType)?.visits || []} />

                        </div>
                    </div>
                    :
                    <div className='modal-container w-full border-3 border-yellow-300'>
                        <div className='border-2 border-red-700'>
                            <InputComp placeholder="Patient Name" value={formData?.name} onChange={(e)=>setFormData({...formData!,name:e.target.value})} />
                            <InputComp />
                            <InputComp />
                            <InputComp />
                            <InputComp />
                            <InputComp />
                            <InputComp />
                            <InputComp />
                            <SelectComp />
                        </div>
                    </div>}

            </Modal>
        </>
    )
}

export default memo(ModalComp)