import { Import } from "lucide-react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/contactUs";
import AboutUs from "./pages/aboutUs";
import Home from "./pages/home";
import Navbar from "./components/navbar"; // Import the Navbar component
import Footer from "./components/footer";
import Bottom from "./components/bottom";
import WhatsApp from "./components/whatsApp";
import ChatBot from "./components/chatBot"; // Import the ChatBot component
import ParticlesBackground from "./components/particleBackground"; // Import the ParticlesBackground component
import DotNetwork from "./components/dotNetwork";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ParticlesBackground />
        <DotNetwork />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <WhatsApp />
        <ChatBot />
        <Bottom />
        <Footer />
      </Router>
    </>
  );
}

export default App;
