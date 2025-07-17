import "../styles/components/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>


      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-col">
          <h3>Assiduity Engineering Co. Ltd</h3>
          <p>Architectural, Mechanical & Electrical Design Specialists</p>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:johnamanyire29@gmail.com">johnamanyire29@gmail.com</a></p>
          <p>Phone: +256 777 036 622</p>
          <p>WhatsApp: +256 743 755 232</p>
          <p>Location: Impala House, Rm 06, 6th Floor</p>
          <p>P.O. Box 184939 Kampala</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </footer>

      {/* Copyright */}
      <div className="footer-bottom">
        © {year} Assiduity Engineering Co. Ltd. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
