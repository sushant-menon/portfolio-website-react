import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Tech from "./components/Tech";
import { ProjectProvider } from "./context/ProjectContext";
import Footer from "./components/Footer";
import Home from "./components/Home";

// const appRouter = createBrowserRouter

function App() {
  return (
    <div>
      <ProjectProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
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
