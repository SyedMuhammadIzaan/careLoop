import { InputNumber } from 'antd'
import React from 'react'
import type { InputProps } from '../interface/InputInterface'

const InputNumberComp:React.FC<InputProps> = ({placeholder, value,onChange}) => {
  const handleChange = (newValue: string | number | null) => {
    if (onChange) {
      onChange(newValue as any);
    }
  };

  return (
    <>
    <InputNumber placeholder={placeholder} value={value} onChange={handleChange} />
    </>
  )
}

export default InputNumberComp