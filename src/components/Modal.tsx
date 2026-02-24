import React, { memo } from 'react'
import type { ModalProps } from '../interface/ModalInterface'
import { Modal } from 'antd'

const ModalComp: React.FC<ModalProps> = ({ open, data, onOk, onCancel }) => {
    console.log("Modal Data",data)
    return (
        <>
            <Modal open={open} onOk={onOk} onCancel={onCancel} ><p>I am Open</p></Modal>
        </>
    )
}

export default memo(ModalComp)