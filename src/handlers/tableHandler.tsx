import type { PatientRecordType } from "../types/patientTypes";

export const handleEdit=(record:PatientRecordType)=>{
    console.log("Edit record",record);
}

export const handleDelete=(record:PatientRecordType)=>{
    console.log("Delete record",record);
}