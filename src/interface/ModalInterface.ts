import type { PatientRecordType } from "../types/patientTypes";

export interface ModalProps{
    open:boolean;
    data?:PatientRecordType | null;
    onOk:()=>void;
    onCancel:()=>void;
}