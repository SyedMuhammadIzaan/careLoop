import React, { memo } from 'react'
import type { ModalProps } from '../interface/ModalInterface'
import { Input, Modal } from 'antd'

const ModalComp: React.FC<ModalProps> = ({ open, data, onOk, onCancel }) => {
    console.log("Modal Data", data)

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        console.log("Input changed", e.target.value)
    }
    return (
        <>
            <Modal open={open} onOk={onOk} onCancel={onCancel} >
                <div className='w-full flex flex-col gap-2.5'>
                    <Input placeholder='Patient Name' value={data?.patientName} onChange={(e)=>handleChange("patientName",e.target.value)} />
                    <Input placeholder='Age' value={data?.age} />
                    <Input placeholder='Gender' value={data?.gender} />
                    <Input placeholder='Diagnosis' value={data?.diagnosis} />
                    <Input placeholder='Date' value={data?.date} />

                </div>
            </Modal>
        </>
    )
}

export default memo(ModalComp)