import type { PatientRecordType } from "../types/patientTypes";

export interface ModalProps{
    type:string | null;
    title?:string;
    open:boolean;
    data?:PatientRecordType | null;
    onOk:()=>void;
    onCancel:()=>void;
}