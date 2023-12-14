import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShareIcon from "../Images/icons/Share-Icon2.png";
import { Insurance, createInsurance } from "../api";
import BackgroundPic from "../images/Insurance_1.png";
import BackgroundPic2 from "../images/Insurance_2.png";
import AddIcon from "../images/icons/Add-Icon.png";
import "./CreateInsurance.css";

const CreateInsurance: React.FC = () => {
  const navigate = useNavigate();

  const [insuranceData, setInsuranceData] = useState<Insurance>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    insuranceProvider: "",
    policyNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInsuranceData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(insuranceData);
    await createInsurance(insuranceData);
    navigate("/insurance");
  };

  return (
    <>
      <div className="Insurance-Page1">
        <img src={BackgroundPic} alt="Background Picture" />
        <div className="Overlay-Text">
          <h1>INSURANCE</h1>
        </div>
      </div>
      <div className="Insurance-Page2">
        <div className="Insurance-Page2-Container">
          <img src={BackgroundPic2} alt="Background Picture 2" />
          <form onSubmit={handleSubmit}>
            <div className="Insurance-Verfication">
              <h1>Insurance Verification</h1>
              <div className="Insurance-Verfication-BodyLeft">
                <h3>First Name</h3>
                <input
                  type="text"
                  name="firstName"
                  value={insuranceData.firstName}
                  onChange={handleChange}
                />
                <h3>Date of Birth</h3>
                <input
                  type="date"
                  placeholder="mm/dd/yyyy"
                  name="dateOfBirth"
                  value={insuranceData.dateOfBirth}
                  onChange={handleChange}
                />
                <h3>Insurance Provider</h3>
                <input
                  type="text"
                  name="insuranceProvider"
                  value={insuranceData.insuranceProvider}
                  onChange={handleChange}
                />
              </div>
              <div className="Insurance-Verfication-BodyRight">
                <h3>Last Name</h3>
                <input
                  type="text"
                  name="lastName"
                  value={insuranceData.lastName}
                  onChange={handleChange}
                />
                <h3>Policy Number</h3>
                <input
                  type="text"
                  name="policyNumber"
                  value={insuranceData.policyNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="Submit-Info">
                <h3>Submit your Documentation</h3>
                <a href="/">
                  <img src={AddIcon} alt="Add Icon" />
                  <h3>Add File</h3>
                </a>
              </div>
              <button className="Submit-Button" type="submit">
                <h1>Submit</h1>
              </button>
            </div>
          </form>
          <div className="Insurance-Message">
            <h1>
              Efficiently manage and verify patient insurance information, and
              ensure seamless financial operations with our integrated insurance
              management tools
            </h1>
            f
          </div>
        </div>
        <div className="Insurance-Status">
          <button className="StatusBox">
            <h1>Check Verification Status</h1>
            <img src={ShareIcon} alt="Share Icon" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateInsurance;
