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
import type { DataType } from "../types/patientTypes"

// type DataIndex = keyof DataType;
interface TableCompProps {
  tableData: DataType[];
  columns: any[];
}

const TableComp: React.FC<TableCompProps> = ({ tableData, columns }) => {

    return (
        <>
            <Table<DataType> columns={columns} dataSource={tableData} />
        </>
    )
}

export default TableComp