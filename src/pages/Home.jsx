// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import Features from "../components/Features";
// import Workflow from "../components/Workflow";
// import Testimonials from "../components/Testimonials";
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
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Footer />
    </>
  );
};

export default Home;