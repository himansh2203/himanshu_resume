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
          <FaGraduationCap className="icon" /> Skills
        </h2>
        <ul>
          <li>
            <strong>Programming Languages:</strong>
            <br />
            Java <span className="date"></span>
          </li>
          <li>
            <strong>Frameworks & CMS:</strong>
            <br />
            SpringBoot, React.js <span className="date"></span>
          </li>
          <li>
            <strong>Concept</strong>
            <br />
            Core Java, Advance java, Rest APIs, OOPs, Agile methodology{" "}
            <span className="date"></span>
          </li>
          <li>
            <strong>Security: </strong>
            <br />
            Spring Security <span className="date"></span>
          </li>
          <li>
            <strong>Build Tool: </strong>
            <br />
            Apache Maven <span className="date"></span>
          </li>
          <li>
            <strong>API Testing:</strong>
            <br />
            PostMan
            <span className="date"></span>
          </li>
          <li>
            <strong>Version Control: </strong>
            <br />
            GitHub, Bitbucket <span className="date"></span>
          </li>
          <li>
            <strong>Operating Systems:</strong>
            <br />
            Windows <span className="date"></span>
          </li>
          <li>
            <strong>IDE:</strong>
            <br />
            Eclipse, STS, Visual Studio code
            <span className="date"></span>
          </li>
        </ul>
      </div>

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
