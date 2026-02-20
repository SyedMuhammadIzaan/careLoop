export interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

export interface PatientRecordType {
  key:string;
  id:string;
  sno:number;
  patientName:string;
  age:number;
  gender:string;
  diagnosis:string;
  date:string;
}

export type PatientDataIndex = keyof PatientRecordType;

export type DataIndex = keyof DataType;
