import React from "react";
import "../styles/aeroplane.css";
import { Plane } from "lucide-react"; // ✅ Fix applied here

const steps = [
  { text: "Spring-boot", side: "left" },
  { text: "Java", side: "right" },
  { text: "SQL", side: "left" },
  { text: "React-js", side: "right" },
  { text: "HTML", side: "left" },
  { text: "CSS", side: "right" },
];

const Aeroplane = () => {
  return (
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
  );
};

export default Aeroplane;
