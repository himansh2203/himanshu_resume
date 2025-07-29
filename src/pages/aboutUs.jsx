import "../styles/aboutUs.css";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

function AboutUs() {
  return (
    <div className="about-us">
      <h1 className="main-heading">About Me</h1>
      <p className="intro-text">
        🚀 Results-driven Software Engineer with <strong>2 years</strong> of
        experience in building scalable, cost-effective solutions. Skilled in
        full-stack development, problem-solving, and writing clean, maintainable
        code. Passionate about creating impactful products and thriving in agile
        teams.
      </p>

      <div className="about-edu section">
        <h2>
          <FaGraduationCap className="icon" /> Education
        </h2>
        <ul>
          <li>
            <strong>B.Tech in Computer Science</strong>
            <br />
            Kurukshetra University, <span className="date">2021</span>
          </li>
          <li>
            <strong>Senior Secondary (CBSE)</strong>
            <br />
            Tagore Academy Public School, <span className="date">2017</span>
          </li>
          <li>
            <strong>Secondary (CBSE)</strong>
            <br />
            Tagore Academy Public School, <span className="date">2015</span>
          </li>
        </ul>
      </div>

      <div className="about-certification section">
        <h2>
          <FaCertificate className="icon" /> Certifications
        </h2>
        <ul>
          <li>
            <strong>Spring Boot</strong>
            <br />
            Craft Code Learnings,{" "}
            <span className="date">Mar 2025 – Apr 2025</span>
          </li>
          <li>
            <strong>Java (Core & Advanced)</strong>
            <br />
            Craft Code Learnings,{" "}
            <span className="date">Nov 2024 – Feb 2025</span>
          </li>
          <li>
            <strong>Android Development</strong>
            <br />
            IBM, <span className="date">Jun 2019 – Jul 2019</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUs;
