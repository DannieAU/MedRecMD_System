import { Snackbar } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Insurance, updateInsurance } from "../api";
import "./CreateDoctorPage.css";

interface UpdateInsurancePageProps {
  insurance: Insurance | undefined;
}

const UpdateInsurancePage: React.FC<UpdateInsurancePageProps> = ({
  insurance,
}) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [statusMessage, setStatusMessage] = React.useState("");
  const [insuranceData, setInsuranceData] = useState<Insurance | undefined>(
    insurance
      ? {
          id: insurance.id,
          firstName: insurance.firstName,
          lastName: insurance.lastName,
          dateOfBirth: insurance.dateOfBirth,
          policyNumber: insurance.policyNumber,
          insuranceProvider: insurance.insuranceProvider,
        }
      : undefined
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInsuranceData((prevData) =>
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
    if (insuranceData) {
      console.log(insuranceData);
      await updateInsurance(insuranceData);
      setStatusMessage(
        `Insurance of ${insuranceData.firstName} ${insuranceData.lastName} is updated successfully`
      );
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
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={insuranceData?.firstName || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={insuranceData?.lastName || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={insuranceData?.dateOfBirth || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Insurance Provider:</label>
          <input
            type="text"
            name="insuranceProvider"
            value={insuranceData?.insuranceProvider || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Policy Number:</label>
          <input
            type="text"
            name="policyNumber"
            value={insuranceData?.policyNumber || ""}
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

export default UpdateInsurancePage;
