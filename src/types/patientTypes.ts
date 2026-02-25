export interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

export interface VisitStatus{
  date:string;
  diagnosis:string;
  status:string;
}

export interface PatientRecordType {
  key:string;
  id:string;
  sno:number;
  patientName:string;
  doctorName:string;
  age:number;
  gender:string;
  visits:VisitStatus[];
  date:string;
}

export type PatientDataIndex = keyof PatientRecordType;

export type DataIndex = keyof DataType;
