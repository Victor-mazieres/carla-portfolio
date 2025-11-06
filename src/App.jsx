import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Prestations from "./pages/Prestations";
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AdminPanel from "./pages/AdminPanel";

export default function App() {
  return (
    <Router>
      {/* === NAVBAR FIXE === */}
      <Navbar />

      {/* === ROUTES === */}
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/home" element={<Home />} />
        <Route path="/prestations" element={<Prestations />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}
