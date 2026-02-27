export interface Profile {
    id:string;
    name: string;
    specialization: string;
    qualification: string[];
    experience: number;
    hospital: string;
    location: string;
    consultationFee: number;
    rating: number;
    totalReviews: number;
    about: string;
    languages: string[];
    availableDays: string[];
    availableSlots: string[];
    image: string;
}