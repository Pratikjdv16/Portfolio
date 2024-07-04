import "./App.css";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Work from "./Component/Work";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import HamburgerNav from "./Component/HamburgerNav";
import Skills from "./Component/AboutComp/Skills";
import Experience from "./Component/AboutComp/Experience";
import Education from "./Component/AboutComp/Education";
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <HamburgerNav />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />}>
          <Route path="/about" element={<Navigate to="/about/skills" />} />
          <Route path="/about/skills" element={<Skills />} />
          <Route path="/about/experience" element={<Experience />} />
          <Route path="/about/education" element={<Education />} />
        </Route>

        <Route path="/contact" element={<Contact />} />

        <Route path="/work" element={<Work />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
