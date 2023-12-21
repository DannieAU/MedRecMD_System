import { Snackbar } from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Insurance, deleteInsurance, getInsurances } from "../api";
import "./InsurancePage.css";
interface InsurancePageProps {
  isLogin: boolean;
  setNewInsurance: React.Dispatch<React.SetStateAction<Insurance | undefined>>;
}

const InsurancePage: React.FC<InsurancePageProps> = ({
  isLogin,
  setNewInsurance,
}) => {
  const [insurances, setInsurances] = useState<Insurance[]>([]);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [statusMessage, setStatusMessage] = React.useState("");

  useEffect(() => {
    const fetchInsurances = async () => {
      try {
        const fetchedInsurances = await getInsurances();
        console.log(fetchedInsurances);
        setInsurances(fetchedInsurances);
      } catch (error) {
        console.error(`Error reading api: ${error}`);
      }
    };
    fetchInsurances();
  }, []);

  const stringToDate = (strDate: string) => {
    let myDate = new Date(strDate);
    return myDate.toLocaleDateString();
  };

  const onUpdate = (insurance: Insurance) => {
    console.log(insurance);
    setNewInsurance(insurance);
    navigate("/update-insurance");
  };

  const removeInsurance = (insuranceId: number | undefined) => {
    const updatedInsurances = insurances.filter(
      (insurance) => insurance.id !== insuranceId
    );

    setInsurances(updatedInsurances);
  };

  const onDelete = async (insurance: Insurance) => {
    console.log(insurance);
    removeInsurance(insurance.id);
    await deleteInsurance(insurance.id);
    setStatusMessage(
      `Insurance of ${insurance.firstName} ${insurance.lastName} is deleted successfully`
    );
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
        <div className="insurances">
          <h1>List of Insurances</h1>
          <div className="insurance-list">
            {insurances.map((insurance) => (
              <div className="insurance" key={insurance.id}>
                <dl>
                  <div>
                    <dt>Name:</dt>
                    <dd>
                      {insurance.firstName} {insurance.lastName}
                    </dd>
                  </div>
                  <div>
                    <dt>Date of Birth:</dt>
                    <dd>{stringToDate(insurance.dateOfBirth)}</dd>
                  </div>
                  <div>
                    <dt>Insurance Provider:</dt>
                    <dd>{insurance.insuranceProvider}</dd>
                  </div>
                  <div>
                    <dt>Policy Number:</dt>
                    <dd>{insurance.policyNumber}</dd>
                  </div>
                </dl>
                <div className="insurance-buttons">
                  <button onClick={() => onUpdate(insurance)}>Update</button>
                  <button onClick={() => onDelete(insurance)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
          <div className="add-insurance">
            <Link to="/create-insurance">Create New Insurance</Link>
          </div>
        </div>
      )}
      {!isLogin && navigate("/login")}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={statusMessage}
      />
    </>
  );
};

export default InsurancePage;
