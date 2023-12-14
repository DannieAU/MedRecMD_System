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

  const onDelete = async (insurance: Insurance) => {
    console.log(insurance);
    await deleteInsurance(insurance.id);
    navigate("/");
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
    </>
  );
};

export default InsurancePage;
