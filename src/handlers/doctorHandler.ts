import { useCallback } from "react";
import { doctorsData } from "../constants/doctorsData";
import type { Doctor } from "../interface/DoctorInterface";
import { notification } from "antd";

interface AppointmentHandler {
    selectedDay: string | null;
    selectedSlot: string | null;
}

export const filteredDoctors = (searchTerm: string) => {
  const filtered = doctorsData.filter(
    (doctor: Doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.hospital.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filtered;
};

export const doctorHandler = (id: string) => {
  const doctor = doctorsData.filter((doctor) => doctor.id === id);
  if (doctor.length > 0) {
    return doctor[0];
  }
};

export const handleAppointment = ({ selectedDay, selectedSlot }: AppointmentHandler ) => {
  if (!selectedDay || !selectedSlot) {
    notification.warning({
      message: "Selection Required",
      description: "Please select day and time slot before booking.",
      placement: "topRight",
    });

    return;
  }

  notification.success({
    message: "Appointment Booked",
    description: `Your appointment is booked on ${selectedDay} at ${selectedSlot}`,
    placement: "topRight",
  });
};
