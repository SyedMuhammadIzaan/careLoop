import type { PatientRecordType } from "../types/patientTypes";
import type { Profile } from "./profileInterface";

export interface ModalProps{
    type:string | null;
    title?:string;
    open:boolean;
    data?:PatientRecordType | Profile | null;
    onOk:(updatedProfile:Profile)=>void;
    onCancel:()=>void;
}