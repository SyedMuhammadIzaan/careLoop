import { doctorsData } from "../constants/doctorsData";
import type { Doctor } from "../interface/DoctorInterface";

export const filteredDoctors = (searchTerm: string) => {
    const filtered = doctorsData.filter((doctor: Doctor) => doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filtered;
}