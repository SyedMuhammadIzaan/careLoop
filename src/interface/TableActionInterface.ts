import type { PatientRecordType } from "../types/patientTypes.ts";
export interface ActionHandler{
    onEdit:(record:PatientRecordType)=>void;
    onDelete:(record:PatientRecordType)=>void;
}