import "../styles/project.css";

function Project() {
  return (
    <div className="timeline-container">
      <h1>Projects</h1>

      <div className="project-card">
        <h2>Easy Life Care (E-commerce Site)[Current Free Lancing Project]</h2>
        <a
          href="https://anmol-site.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://anmol-site.vercel.app/
        </a>
        <ul>
          <li>
            <strong>Front-end:</strong> React.js
          </li>
          <li>
            <strong>Back-end:</strong> Spring Boot
          </li>
          <li>
            <strong>Database:</strong> MySQL
          </li>
          <li>
            <strong>Deployment:</strong> Vercel (Front-end), Render (Back-end)
          </li>
        </ul>
      </div>

      <div className="project-card">
        <h2>Adorne Beauty (Parlour Site) [Upcoming Fee Lancing Project]</h2>
        <a
          href="https://adorne-beauty.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://adorne-beauty.vercel.app/
        </a>
        <ul>
          <li>
            <strong>Front-end:</strong> React.js
          </li>
          <li>
            <strong>Back-end:</strong> Spring Boot
          </li>
          <li>
            <strong>Database:</strong> MySQL
          </li>
          <li>
            <strong>Deployment:</strong> Vercel (Front-end), Render (Back-end)
          </li>
        </ul>
      </div>

      <div className="project-card">
        <h2>NEWTRON ENGINEERS</h2>
        <a
          href="https://www.newtronengineers.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.newtronengineers.com/
        </a>
        <ul>
          <li>
            <strong>Stack:</strong> HTML, CSS, JavaScript, Express.js
          </li>
          <li>
            <strong>Role:</strong> Full-stack Developer
          </li>
          <li>Designed and developed the entire website independently</li>
          <li>
            Delivered the live site on schedule and handed it over to the client
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
