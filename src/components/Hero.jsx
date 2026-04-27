import { useNavigate } from "react-router-dom";
import "../styles/hero.css";
import heroImg from "../assets/hero-img.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="container hero-wrapper">
        <div className="hero-text">
          <h1>
            Master Tajweed with <span>AI Precision</span>
          </h1>

          <p>
            Experience advanced Quran recitation analysis with real-time AI feedback to perfect your articulation and rhythm.
          </p>

          <div className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => navigate("/courses")}
            >
              Start Learning
            </button>
            <button
              className="btn-outline"
              onClick={() => navigate("/demo")}
            >
              Watch Demo
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Girl reading Quran" />
        </div>
      </div>
    </section>
  );
};

export default Hero;