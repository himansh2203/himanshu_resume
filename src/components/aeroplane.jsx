import React from "react";
import "../styles/aeroplane.css";
import { Plane } from "lucide-react"; // ✅ Fix applied here

const steps = [
  { text: "Intern , Code Craft Learning", side: "left" },
  { text: "Free Lancing Projects For Clients", side: "right" },
  { text: "Associate Developer , Hughes Systique Corporation", side: "left" },
  {
    text: "B.Tech in Computer Science , Kurukshetra University",
    side: "right",
  },
  {
    text: "Senior Secondary (CBSE) ,Tagore Academy Public School",
    side: "left",
  },
  { text: "Secondary (CBSE) ,Tagore Academy Public School", side: "right" },
];

const Aeroplane = () => {
  return (
    <div>
      <div className="timeline-container">
        <center>
          <strong>CAREER JOURNEY</strong>
        </center>
      </div>
      <div className="timeline-container">
        <div className="plane-line">
          <div className="plane-icon">
            <Plane size={28} color="#5c6bc0" /> {/* ✅ Fix applied here */}
          </div>
        </div>

        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step ${step.side === "left" ? "left" : "right"}`}
            >
              <div className="content">{step.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aeroplane;
