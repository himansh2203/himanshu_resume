import React from "react";
import "../styles/aeroplane.css";
import { Plane } from "lucide-react"; // ✅ Fix applied here

const steps = [
  { text: "Landing Page Ready", side: "left" },
  { text: "About Section Done", side: "right" },
  { text: "Services Connected", side: "left" },
  { text: "Testimonials Setup", side: "right" },
  { text: "Contact Integrated", side: "left" },
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
