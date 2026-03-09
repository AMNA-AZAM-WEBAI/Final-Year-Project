// import { useNavigate } from "react-router-dom";

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="hero">
//       <div className="hero-text">
//         <span className="badge">POWERED BY AI</span>

//         <h1>Master Tajweed with AI Precision</h1>

//         <p>
//           Instant, accurate feedback on your Quranic recitation using
//           advanced speech recognition technology.
//         </p>

//         <div className="hero-buttons">
         

//           <button
//             className="btn-outline"
//             onClick={() => navigate("/demo")}
//           >
//             Try the Demo
//           </button>
      

// <button onClick={() => navigate("/Courses")}  className="btn-primary">
//   Start Learning Free
// </button>


//         </div>
//       </div>

//       <div className="hero-card">
//         <div className="accuracy-box">
//           <div className="accuracy-bar">
//             <div className="accuracy-fill"></div>
//           </div>
//           <p className="accuracy-text">
//             Analysis complete: 98% Accuracy
//           </p>
//         </div>
//       </div>
      

//     </section>
  

//   );
// };

// export default Hero;

import React from "react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-wrapper">
        
        <div className="hero-text">
          <h1>
            Master Tajweed with <span>AI Precision</span>
          </h1>

          <p>
            Experience advanced Quran recitation analysis with real-time AI
            feedback to perfect your articulation and rhythm.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Start Learning</button>
            <button className="btn-outline">Watch Demo</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1584556812952-905ffd0d8e0e"
            alt="Quran"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;