import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UnderDevelopment from './pages/UnderDevelopment';
import './App.css'
import './index.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhatsappButton from './components/WhatsappButton';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<UnderDevelopment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<UnderDevelopment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<UnderDevelopment />} />
      </Routes>
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;
