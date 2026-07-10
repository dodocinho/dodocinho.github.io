import "./App.css";
import Routes from "./routes";
import mailIcon from "./assets/icons/email.svg";
import githubIcon from "./assets/icons/github.svg";
import whatsappIcon from "./assets/icons/whatsapp.svg";

function App() {
  const projectItems = [
    {
    id: `shaderslab`,
    label: "Shaderslab",
  }
]

  return (
    <>
      <Routes />

      <nav className="projects-menu" aria-label="Projetos">
        <ul>
          {projectItems.map((project) => (
            <li key={project.id}>
              <a href="/projects/shaderslab" data-text={project.label}>{project.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="almost-full-page">
        <div className="logo-center">
          <div className="logo-fx">
            <img className="main-logo" src="/vjdodologoalpha.png" alt="Logo dod0" />
          </div>
        </div>
        <div className="contact-footer">
          <a className="contact-link" href="mailto:dodocinho.carreira@gmail.com" aria-label="Email">
            <span className="contact-icon">
              <img src={mailIcon} alt="" />
            </span>
            <span className="contact-text">dodocinho.carreira@gmail.com</span>
          </a>
          <a className="contact-link" href="https://github.com/dodocinho" target="_blank" rel="noreferrer" aria-label="GitHub">
            <span className="contact-icon">
              <img src={githubIcon} alt="" />
            </span>
            <span className="contact-text">github.com/dodocinho</span>
          </a>
          <a className="contact-link" href="https://wa.me/5548984864947" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <span className="contact-icon">
              <img src={whatsappIcon} alt="" />
            </span>
            <span className="contact-text">+55 48 98486-4947</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
