import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Tech from "./components/Tech";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
