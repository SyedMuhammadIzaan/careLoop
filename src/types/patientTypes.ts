export interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

export interface PatientRecord {
  id:string;
  sno:number;
  patientName:string;
  age:number;
  gender:string;
  diagnosis:string;
  date:string;
}

export type PatientRecordDataIndex = keyof PatientRecord;

export type DataIndex = keyof DataType;
