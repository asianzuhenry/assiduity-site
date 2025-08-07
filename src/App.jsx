import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import UnderDevelopment from './pages/UnderDevelopment';
import './styles/App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WhatsappButton from './components/WhatsappButton';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Mechanical from './pages/Mechanical';
import Electrical from './pages/Electrical';
import Plumbing from './pages/Plumbing';

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
         <Route path="/services/plumbing"  element={<Plumbing />} />
         <Route path="/services/mechanical"  element={<Mechanical />} />
         <Route path="/services/electrical"  element={<Electrical />} />
        <Route path="*" element={<UnderDevelopment />} />
      </Routes>
      <Footer />
      <WhatsappButton />
    </>
  );
}

export default App;
