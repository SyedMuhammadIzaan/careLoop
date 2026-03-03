import { InputNumber } from 'antd'
import React from 'react'
import type { InputProps } from '../interface/InputInterface'

const InputNumberComp:React.FC<InputProps> = ({placeholder, value,onChange}) => {
  return (
    <>
    <InputNumber placeholder={placeholder} value={value} onChange={onChange} />
    </>
  )
}

export default InputNumberComp