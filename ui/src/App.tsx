import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Doctor, Insurance, User } from "./api";
import { About } from "./components/About";
import CreateDoctorPage from "./components/CreateDoctorPage";
import CreateInsurance from "./components/CreateInsurance";
import DoctorsPage from "./components/DoctorsPage";
import { Help } from "./components/Help";
import Home from "./components/Homepage";
import InsurancePage from "./components/InsurancePage";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignupPage from "./components/Signup";
import UpdateDoctorPage from "./components/UpdateDoctorPage";
import UpdateInsurancePage from "./components/UpdateInsurancePage";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState<User>();
  const [newDoctor, setNewDoctor] = useState<Doctor>();
  const [newInsurance, setNewInsurance] = useState<Insurance>();

  return (
    <Router>
      <div className="App">
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/doctors"
            element={
              <DoctorsPage isLogin={isLogin} setNewDoctor={setNewDoctor} />
            }
          />
          <Route
            path="/insurance"
            element={
              <InsurancePage
                isLogin={isLogin}
                setNewInsurance={setNewInsurance}
              />
            }
          />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={<Login setIsLogin={setIsLogin} setUser={setUser} />}
          />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/create-doctor" element={<CreateDoctorPage />} />
          <Route path="/create-insurance" element={<CreateInsurance />} />
          <Route
            path="/update-doctor"
            element={<UpdateDoctorPage doctor={newDoctor} />}
          />
          <Route
            path="/update-insurance"
            element={<UpdateInsurancePage insurance={newInsurance} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
