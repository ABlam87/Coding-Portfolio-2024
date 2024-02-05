import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap"; // Import all of Bootstrap's JS
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProjectsGallery from "./pages/ProjectsGallery";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
    return(
  <Router>
    <Header />
    <Routes basename="/Coding-Portfolio-2024">
      <Route path="/" element={<Home />} />
      <Route path="project-gallery" element={<ProjectsGallery />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </Router>
    )
}

export default App;
