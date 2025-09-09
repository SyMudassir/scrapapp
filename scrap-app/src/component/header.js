import './header.css';
import { useNavigate } from "react-router-dom";
import { useAuth } from "./fAuthContext";

const Header = () => {
  const { user } = useAuth(); // ✅ Use `user` instead of `isLoggedIn`
  const navigate = useNavigate();

  const handleProtectedClick = (path) => {
    if (!user) {
      alert("Please login to continue");
      navigate("/"); // ✅ Goes to login page
    } else {
      navigate(path);
    }
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <img src="assets/img/logo.webp" alt=""/> 
          <h1 className="sitename">RK Scrap</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li style={{ cursor: 'pointer' }} onClick={() => handleProtectedClick("/home")}>Home</li>
            <li style={{ cursor: 'pointer' }} onClick={() => handleProtectedClick("/scraprates")}>Scrap Rates</li>
            <li style={{ cursor: 'pointer' }} onClick={() => handleProtectedClick("/home")}>About us</li>
            <li style={{ cursor: 'pointer' }} onClick={() => handleProtectedClick("/schedule")}>Schedule</li>
            <li style={{ cursor: 'pointer' }} onClick={() => handleProtectedClick("/home")}>Pickups</li>
            <li style={{ cursor: 'pointer' }} onClick={() => handleProtectedClick("/home")}>Profile</li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
