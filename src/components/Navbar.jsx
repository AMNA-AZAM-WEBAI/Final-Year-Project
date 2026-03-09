// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <h2 className="logo">Tajweed AI</h2>

//       <ul className="nav-links">
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

import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-wrapper">
        <div className="logo">Tajweed AI</div>
        <button className="btn-primary">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
