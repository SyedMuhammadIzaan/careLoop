import React, { memo } from 'react'
import { Input } from 'antd'
import type { InputProps } from '../interface/InputInterface'

const InputComp: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
    console.log("Input value", value)
    return (
        <>
            <Input placeholder={placeholder} value={value} onChange={onChange} />
        </>
    )
}

export default memo(InputComp)