import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Shaderslab from "./projects/shaderslab/src/App";

function App() {
  return (
    <>
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
        <BrowserRouter>
          <Routes>
            <Route path="/shaderslab" element={<Shaderslab />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
