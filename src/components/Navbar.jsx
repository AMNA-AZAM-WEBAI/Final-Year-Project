import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-wrapper">

        <h2 className="logo">Tajweed AI</h2>

        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#workflow">How It Works</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>

        <div className="nav-actions">
          {!user ? (
            <>
              <Link to="/login">
                <button className="btn-outline">Login</button>
              </Link>

              <Link to="/signup">
                <button className="btn-primary">Signup</button>
              </Link>
            </>
          ) : (
            <>
              <span className="welcome-user">
                Welcome, {user.name}
              </span>

              <button className="btn-primary" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

//import React from "react";
// import "../styles/navbar.css";
// const Navbar = () => {
//   return (
//     <nav className="navbar nav-wrapper">
//       <h2 className="logo">Tajweed AI</h2>

//       <ul className="nav-links nav-wrapper">
//          <li><a href="#features">Features</a></li>
//          <li><a href="#workflow">How It Works</a></li>
//         <li><a href="#testimonials">Testimonials</a></li>
//       </ul>

//       <div className="nav-actions">
//         <button className="btn-outline">Log In</button>
//         <button className="btn-primary">Get Started</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import "../styles/navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="container nav-wrapper">
//         <div className="logo">Tajweed AI</div>
//         <button className="btn-primary">Get Started</button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
