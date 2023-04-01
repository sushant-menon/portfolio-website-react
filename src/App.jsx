import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Tech from "./components/Tech";
import { ProjectProvider } from "./context/ProjectContext";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <ProjectProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </ProjectProvider>
    </div>
  );
}

export default App;
