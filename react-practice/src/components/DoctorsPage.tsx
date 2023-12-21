import { Snackbar } from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Doctor, deleteDoctor, getDoctors } from "../api";
import "./DoctorsPage.css";
interface DoctorsPageProps {
  isLogin: boolean;
  setNewDoctor: React.Dispatch<React.SetStateAction<Doctor | undefined>>;
}

const DoctorsPage: React.FC<DoctorsPageProps> = ({ isLogin, setNewDoctor }) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const fetchedDoctors = await getDoctors();
        console.log(fetchedDoctors);
        setDoctors(fetchedDoctors);
      } catch (error) {
        console.log(`Error reading api ${error}`);
      }
    };
    fetchDoctors();
  }, []);

  const onUpdate = (doctor: Doctor) => {
    console.log(doctor);
    setNewDoctor(doctor);
    navigate("/update-doctor");
  };

  const removeDoctor = (doctorId: number | undefined) => {
    const updatedDoctors = doctors.filter((doctor) => doctor.id !== doctorId);

    setDoctors(updatedDoctors);
  };

  const onDelete = async (doctor: Doctor) => {
    console.log(doctor);
    removeDoctor(doctor.id);
    await deleteDoctor(doctor.id);
    setOpen(true);
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
      {isLogin && (
        <div className="doctors">
          <h1>Our Doctors</h1>
          <div className="doctor-list">
            {doctors.map((doctor) => (
              <div className="doctor" key={doctor.id}>
                <img src={doctor.image} alt={doctor.name} />
                <h2>{doctor.name}</h2>
                <h3>{doctor.specialty}</h3>
                <p>{doctor.description}</p>
                <div className="contact-info">
                  <p>
                    <strong>Contact:</strong> {doctor.contactNumber}
                  </p>
                  <p>
                    <strong>Email:</strong> {doctor.email}
                  </p>
                </div>
                <div className="doctors-buttons">
                  <button onClick={() => onUpdate(doctor)}>Update</button>
                  <button onClick={() => onDelete(doctor)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
          <div className="add-doctor">
            <Link to="/create-doctor">Create New User</Link>
          </div>
        </div>
      )}
      {!isLogin && navigate("/login")}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={`Doctor Deleted Successfully`}
      />
    </>
  );
};

export default DoctorsPage;
