// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// mport Testimonials from "../components/Testimonials";import Features from "../components/Features";
// import Workflow from "../components/Workflow";
// i
// import Footer from "../components/Footer";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Features />
//       <Workflow />
//       <Testimonials />
//       <Footer />
//     </>
//   );
// }

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials/>
      <Footer />
    </>
  );
};

export default Home;