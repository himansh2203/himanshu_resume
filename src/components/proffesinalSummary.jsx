import "../styles/professinalSummary.css";

function Proffesinal() {
  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Professional Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="icon-briefcase"></i>
          </div>
          <div className="timeline-content">
            <h3>Intern – Craft Code Learnings</h3>
            <span className="timeline-date">Nov 2024 – April 2025</span>
            <ul>
              <li>
                Gained hands-on experience in Java and Spring Boot through
                building projects and mastering backend concepts in a
                learning-oriented environment.
              </li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="icon-briefcase"></i>
          </div>
          <div className="timeline-content">
            <h3>Associate Developer – Hughes Systique Corporation, Gurgaon</h3>
            <span className="timeline-date">March 2022 – Oct 2023</span>
            <ul>
              <li>
                Designed, developed, and implemented software solutions using
                modern Java and Spring Boot.
              </li>
              <li>
                Collaborated with cross-functional teams to define, design, and
                ship features based on client requirements.
              </li>
              <li>
                Wrote clean, scalable, and maintainable code following best
                practices.
              </li>
              <li>
                Enhanced features across multiple modules using Java Core,
                Spring Boot, Microservices Architecture, and REST APIs.
              </li>
              <li>
                Performed API testing and ensured functionality and security
                through thorough testing practices.
              </li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="icon-briefcase"></i>
          </div>
          <div className="timeline-content">
            <h3>Intern – Hughes Systique Corporation, Gurgaon</h3>
            <span className="timeline-date">Jan 2022 – March 2022</span>
            <ul>
              <li>
                Assisted in development tasks and gained practical experience in
                Java and Spring Boot in a corporate environment.
              </li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">
            <i className="icon-briefcase"></i>
          </div>
          <div className="timeline-content">
            <h3>Intern – IBM, Noida</h3>
            <span className="timeline-date">Jun 2019 – July 2019</span>
            <ul>
              <li>
                Assisted in Android app development tasks and gained practical
                experience in Android applications.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proffesinal;
