import React, { memo } from "react";
import { Select } from "antd"
import type { InputProps } from "../interface/InputInterface"

const SelectComp:React.FC<InputProps> = ({placeholder, value, onChange,options}) => {
  console.log("PlaceHolder", options)
  const handleChange = (selectedValue: string | number | null) => {
    if (onChange) {
      onChange(selectedValue as any);
    }
  };

  return (
    <>
      <Select style={{width:170}} className="" allowClear placeholder={placeholder} value={value} options={options} onChange={handleChange} />
    </>
  )
}

export default memo(SelectComp)