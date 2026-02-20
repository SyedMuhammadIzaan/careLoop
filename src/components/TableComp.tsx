// import { useRef, useState } from 'react'
// import { SearchOutlined } from '@ant-design/icons';
// import type { InputRef, TableColumnsType, TableColumnType } from 'antd';
// import { Button, Input, Space } from 'antd';
// import type { FilterDropdownProps } from 'antd/es/table/interface';
// import Highlighter from 'react-highlight-words';
// import { Table } from 'antd'
// import { columns, data } from '../constants/patientRecord';
// import type { DataType } from '../types/patientTypes';

import { Table } from "antd"
// import type { DataType,PatientRecordType } from "../types/patientTypes"

// type DataIndex = keyof DataType;
interface TableCompProps<T> {
  tableData: T[];
  columns: any[];
}

const TableComp =<T,> ({ tableData, columns }:TableCompProps<T>) => {
    
    return (
        <>
            <Table<T> columns={columns} dataSource={tableData} />
        </>
    )
}

export default TableComp