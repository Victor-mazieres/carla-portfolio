import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Prestations from "./pages/Prestations";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      {/* === NAVBAR FIXE === */}
      <Navbar />

      {/* === ROUTES === */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
