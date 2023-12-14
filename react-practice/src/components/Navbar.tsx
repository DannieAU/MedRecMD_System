import { Link, useNavigate } from "react-router-dom";
import { User } from "../api";
import Logo from "../images/LogoTest.jpg";
import "./Navbar.css";
interface NavbarProps {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | undefined;
}

const Navbar: React.FC<NavbarProps> = ({ isLogin, setIsLogin, user }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLogin(false);
    navigate("/");
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/doctors">DOCTORS</Link>
        </li>
        <li>
          <Link to="/insurance">INSURANCE</Link>
        </li>
        <li>
          <Link to="/help">HELP</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          {isLogin ? (
            <span onClick={handleLogout}>LOGOUT</span>
          ) : (
            <Link to="/login">LOGIN</Link>
          )}
        </li>
      </ul>
      <div className="welcome-user">
        {isLogin ? (
          <span>
            Welcome,{" "}
            <strong>
              {user?.firstName} {user?.lastName}!
            </strong>
          </span>
        ) : (
          <span></span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
