import type { DataType, PatientRecordType } from "../types/patientTypes.ts";

export const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    address: "Sydney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

export const patientRecordData: PatientRecordType[] = [
  {
    key: '1',
    sno: 1,
    id: "20250102",
    patientName: "John Doe",
    age: 30,
    gender: "Male",
    diagnosis: "Flu",
    date: "2025-01-02",
  },
  {
    key: '2',
    sno: 2,
    id: "20250103",
    patientName: "Jane Smith",
    age: 25,
    gender: "Male",
    diagnosis: "Cold",
    date: "2025-01-03",
  },
  {
    key: '3',
    sno: 3,
    id: "20250104",
    patientName: "Alice Johnson",
    gender: "Male",
    age: 28,
    diagnosis: "Allergy",
    date: "2025-01-04",
  },
  {
    key: '4',
    sno: 4,
    id: "20250105",
    patientName: "Bob Brown",
    age: 35,
    gender: "Male",
    diagnosis: "Headache",
    date: "2025-01-05",
  },
  {
    key: '5',
    sno: 5,
    id: "20250106",
    patientName: "Charlie Davis",
    gender: "Male",
    age: 40,
    diagnosis: "Back Pain",
    date: "2025-01-06",
  },
];
