import React, { memo } from 'react'
import { Input } from 'antd'

interface InputProps {
    placeholder?: string;
    value?: string;
     onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComp: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
    console.log("Input value", value)
    return (
        <>
            <Input placeholder={placeholder} value={value} onChange={onChange} />
        </>
    )
}

export default memo(InputComp)