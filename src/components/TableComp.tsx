import { useRef, useState } from 'react'
import { SearchOutlined } from '@ant-design/icons';
import type { InputRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Input, Space } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
// import { Table } from 'antd'
// import { columns, data } from '../constants/patientRecord';
import type { DataType } from '../types/patientTypes';

type DataIndex = keyof DataType;

const TableComp:React.FC<> = ({tableData:DataType[],columns:TableColumnsType<T>}) => {
    const searchInput = useRef<InputRef>(null);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');

    

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '30%',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            width: '20%',
            ...getColumnSearchProps('age'),
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            ...getColumnSearchProps('address'),
            sorter: (a, b) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
    ];
    return (
        <>
            <Table<DataType> columns={columns} dataSource={data} />;
        </>
    )
}

export default TableComp