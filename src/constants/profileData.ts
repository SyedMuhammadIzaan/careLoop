import type { Profile } from "../interface/profileInterface";

export const profileData: Profile[] = [
  {
    id: "DOC001",
    name: "Dr. Ahmed Raza",
    specialization: "Cardiologist",
    qualification: ["MBBS - Dow University", "FCPS Cardiology", "MRCP (UK)"],
    experience: 12,
    hospital: "Zteck Medical Center",
    location: "Karachi, Pakistan",
    consultationFee: 2500,
    rating: 4.8,
    totalReviews: 324,
    about:
      "Experienced cardiologist specializing in heart diseases, hypertension, and preventive cardiology.",
    languages: ["English", "Urdu"],
    availableDays: ["Monday", "Wednesday", "Friday"],
    availableSlots: ["10:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"],
    image: "/doctors/ahmed.jpg",
  },
];
