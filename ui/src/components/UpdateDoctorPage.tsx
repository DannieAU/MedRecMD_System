import { Snackbar } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Doctor, updateDoctor } from "../api";
import "./CreateDoctorPage.css";

interface UpdateDoctorPageProps {
  doctor: Doctor | undefined;
}

const UpdateDoctorPage: React.FC<UpdateDoctorPageProps> = ({ doctor }) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [statusMessage, setStatusMessage] = React.useState("");
  const [doctorData, setDoctorData] = useState<Doctor | undefined>(
    doctor
      ? {
          id: doctor.id,
          name: doctor.name,
          specialty: doctor.specialty,
          degree: doctor.degree,
          description: doctor.description,
          contactNumber: doctor.contactNumber,
          email: doctor.email,
          image: doctor.image,
        }
      : undefined
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDoctorData((prevData) =>
      prevData
        ? {
            ...prevData,
            [name]: value,
          }
        : undefined
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (doctorData) {
      console.log(doctorData);
      await updateDoctor(doctorData);
      setStatusMessage(`Doctor ${doctorData.name} is updated successfully`);
      setOpen(true);
    }
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={doctorData?.name || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Specialty:</label>
          <input
            type="text"
            name="specialty"
            value={doctorData?.specialty || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Degree:</label>
          <input
            type="text"
            name="degree"
            value={doctorData?.degree || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={doctorData?.description || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Contact Number:</label>
          <input
            type="text"
            name="contactNumber"
            value={doctorData?.contactNumber || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={doctorData?.email || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={doctorData?.image || ""}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={statusMessage}
      />
    </>
  );
};

export default UpdateDoctorPage;
