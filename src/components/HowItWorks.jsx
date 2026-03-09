// const Workflow = () => {
//   return (
//   <section id="workflow" className="workflow">
//       <h2>How Tajweed AI Works</h2>

//       <div className="workflow-steps">
//         <div>
//           <h3>1. Record</h3>
//           <p>Recite directly in the browser.</p>
//         </div>
//         <div>
//           <h3>2. Analyze</h3>
//           <p>AI compares your recitation.</p>
//         </div>
//         <div>
//           <h3>3. Improve</h3>
//           <p>Receive Tajweed corrections.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Workflow;
import React from "react";
import "../styles/how.css";

const HowItWorks = () => {
  return (
    <section className="how">
      <h2>How It Works</h2>

      <div className="steps">
        <div className="step">
          <div className="circle">1</div>
          <div>
            <h4>Audio Capture</h4>
            <p>Recite clearly through microphone.</p>
          </div>
        </div>

        <div className="step">
          <div className="circle">2</div>
          <div>
            <h4>AI Analysis</h4>
            <p>AI compares recitation with Tajweed rules.</p>
          </div>
        </div>

        <div className="step">
          <div className="circle">3</div>
          <div>
            <h4>Visual Feedback</h4>
            <p>Receive instant correction and guidance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
