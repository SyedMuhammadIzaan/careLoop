import React, { memo, useEffect, useState } from 'react'
import type { ModalProps } from '../../interface/ModalInterface'
import { Modal } from 'antd'
import TableComp from './TableComp'
import type { ColumnType } from 'antd/es/table'
import type { PatientRecordType } from '../../types/patientTypes'
import InputComp from './Input'
import SelectComp from '../Select'
import type { Profile } from '../../interface/profileInterface'
import { QualificationOptions, SpecializationOptions } from '../../constants/degreeOptions'
import UploadComp from '../Upload'

const ModalComp: React.FC<ModalProps> = ({ type, title, open, data, onOk, onCancel }) => {
    const [formData, setFormData] = useState<Profile | null>(null);
    console.log("Modal Data", data)
    useEffect(() => {
        if (data && type === "doctor") {
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
            <Modal title={title} open={open} onOk={() => formData && onOk(formData)} onCancel={onCancel} >
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
                        <div className='flex flex-col gap-2.5 p-2 rounded-lg'>
                            <InputComp placeholder="Patient Name" value={formData?.name} onChange={(e) => setFormData({ ...formData!, name: e.target.value })} />
                            <InputComp placeholder="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout." value={formData?.about} onChange={(e) => setFormData({ ...formData!, about: e.target.value })} />

                            <div className='flex flex-row justify-between gap-3 flex-wrap w-full'>
                                <SelectComp placeholder='Specialization' value={formData?.specialization} options={SpecializationOptions} onChange={(e) => setFormData({ ...formData!, specialization: e.target.value })} />
                                <SelectComp placeholder='Qualification' value={formData?.qualification?.join(', ')} options={QualificationOptions} onChange={(e) => setFormData({ ...formData!, qualification: e.target.value.split(', ') })} />
                            </div>
                            <InputComp placeholder='Experience' value={formData?.experience} onChange={(e) => setFormData({ ...formData!, experience: Number(e.target.value) })} />
                            <InputComp placeholder='Hospital' value={formData?.hospital} onChange={(e) => setFormData({ ...formData!, hospital: e.target.value })} />
                            {/* <InputComp placeholder='Location' value={formData?.location} onChange={(e) => setFormData({ ...formData!, location: e.target.value })} /> */}
                            <InputComp placeholder='Consultation Fee' value={formData?.consultationFee} onChange={(e) => setFormData({ ...formData!, consultationFee: Number(e.target.value) })} />
                        </div>
                    </div>}

            </Modal>
        </>
    )
}

export default memo(ModalComp)