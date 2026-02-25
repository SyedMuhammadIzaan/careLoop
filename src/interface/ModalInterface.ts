import type { PatientRecordType } from "../types/patientTypes";

export interface ModalProps{
    title?:string;
    open:boolean;
    data?:PatientRecordType | null;
    onOk:()=>void;
    onCancel:()=>void;
}