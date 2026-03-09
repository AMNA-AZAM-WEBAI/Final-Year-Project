import { useState } from "react";
import "../styles/Courses.css";
import { useNavigate } from "react-router-dom";



const Courses = () => {
  const [activeModule, setActiveModule] = useState("Noon Saakin Rules");
  const navigate = useNavigate();


  const modules = [
    { title: "Makharij Al-Huruf", level: "Beginner", img: "img-1" },
    { title: "Noon Saakin Rules", level: "Intermediate", img: "img-2" },
    { title: "Madd (Elongation)", level: "Advanced", img: "img-3" },
    {
      title: "Characteristics of Letters (Sifat)",
      level: "Intermediate",
      img: "img-4",
    },
  ];

  const pathProgress = [
    {
      title: "Arabic Alphabet Basics",
      status: "completed",
      meta: "Completed • Score 98%",
    },
    {
      title: "Vowels (Harakat)",
      status: "completed",
      meta: "Completed • Score 92%",
    },
    {
      title: "Noon Saakin Rules",
      status: activeModule === "Noon Saakin Rules" ? "active" : "locked",
      meta:
        activeModule === "Noon Saakin Rules"
          ? "45% In Progress"
          : "Locked",
      progress: activeModule === "Noon Saakin Rules" ? 45 : null,
    },
    {
      title: "Meem Saakin Rules",
      status: activeModule === "Meem Saakin Rules" ? "active" : "locked",
      meta:
        activeModule === "Meem Saakin Rules"
          ? "In Progress"
          : "Locked",
    },
    {
      title: "Madd (Elongation)",
      status: activeModule === "Madd (Elongation)" ? "active" : "locked",
      meta:
        activeModule === "Madd (Elongation)"
          ? "In Progress"
          : "Locked",
    },
  ];

  return (
    <div className="lp-container">
      {/* NAVBAR */}
      <nav className="lp-navbar">
        <div className="lp-navbar-inner">
          <div className="lp-brand">
            <div className="lp-logo">◆</div>
            <h2>Tajweed AI</h2>
          </div>

          <div className="lp-nav-links">
            <a href="#">Dashboard</a>
            <a className="active">Courses</a>
            <a href="#">Practice</a>
            <a href="#">Community</a>
          </div>
        </div>
      </nav>

      {/* MAIN */}
      <main className="lp-main lp-layout">
        {/* LEFT CONTENT */}
        <div className="lp-content">
          {/* HERO */}
          <section className="lp-hero">
            <div className="lp-hero-text">
              <h1>
                Master the Art of <span>Tajweed</span>
              </h1>
              <p>
                Explore our AI-powered modules to perfect your Quranic recitation.
              </p>
            </div>
            <div className="lp-hero-image"></div>
          </section>

          {/* MODULES */}
          <section className="lp-modules">
            <h2>Explore Modules</h2>

            <div className="lp-module-grid">
              {modules.map((module) => (
                <div
                  key={module.title}
                  className="lp-card"
                 onClick={() => {
  setActiveModule(module.title);
  navigate("/demo", {
    state: {
      moduleTitle: module.title,
      level: module.level,
    },
  });
}}

                  style={{ cursor: "pointer" }}
                >
                  <div className={`lp-card-img ${module.img}`}></div>

                  <div className="lp-card-body">
                    <h3>{module.title}</h3>
                    <p>Level: {module.level}</p>
                    <button>Start Module →</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="lp-sidebar">
          <h3>Your Path</h3>

          {pathProgress.map((item, index) => (
            <div key={index} className={`lp-path-item ${item.status}`}>
              <div className="lp-dot"></div>

              <div>
                <p>{item.title}</p>

                {item.progress ? (
                  <>
                    <div
                      style={{
                        width: "100%",
                        height: "6px",
                        background: "#e2e8f0",
                        borderRadius: "999px",
                        marginTop: "6px",
                      }}
                    >
                      <div
                        style={{
                          width: `${item.progress}%`,
                          height: "100%",
                          background: "#0284c7",
                          borderRadius: "999px",
                        }}
                      />
                    </div>
                    <small>{item.meta}</small>
                  </>
                ) : (
                  <small>{item.meta}</small>
                )}
              </div>
            </div>
          ))}
        </aside>
      </main>

      {/* FOOTER */}
      <footer className="lp-footer">
        © 2024 Tajweed AI. All rights reserved.
      </footer>
    </div>
  );
};

export default Courses;
