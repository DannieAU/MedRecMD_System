import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Doctor, createDoctor } from "../api";
import "./CreateDoctorPage.css";

const CreateDoctorPage: React.FC = () => {
  const navigate = useNavigate();
  const [doctorData, setDoctorData] = useState<Doctor>({
    name: "",
    specialty: "",
    degree: "",
    description: "",
    contactNumber: "",
    email: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDoctorData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(doctorData);
    await createDoctor(doctorData);
    navigate("/doctors");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={doctorData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Specialty:</label>
        <input
          type="text"
          name="specialty"
          value={doctorData.specialty}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Degree:</label>
        <input
          type="text"
          name="degree"
          value={doctorData.degree}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          name="description"
          value={doctorData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Contact Number:</label>
        <input
          type="text"
          name="contactNumber"
          value={doctorData.contactNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={doctorData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          value={doctorData.image}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateDoctorPage;
