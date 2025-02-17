import "./App.css";
import Routes from "./routes";

function App() {
  return (
    <>
      <Routes />

      <div className="almost-full-page">
        <h1>dod0</h1>
        <div className="contact-footer">
          <a href="mailto:evandro.carreira@gmail.com">
            <p>evandro.carreira@gmail.com</p>
          </a>
          <a href="https://github.com/dodocinho">
            <p>github.com/dodocinho</p>
          </a>
        </div>
      </div>
      <div className="projects">
        <a href="/shaderslab">Shaderslab</a>
      </div>
    </>
  );
}

export default App;
