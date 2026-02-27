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
    availableSlots: ["10:00 AM - 1:00 PM", "10:00 AM - 2:00 PM", "1:45 AM - 3:45 PM", "6:45 AM - 9:45 PM","7:30 AM - 10:30 PM"],
    image: "/doctors/ahmed.jpg",
  },
];
