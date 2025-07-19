// src/pages/services/Electrical.jsx
import "../styles/pages/ServiceDetail.css";
import { Link } from "react-router-dom";
const Electrical = () => {
  return (
    <div className="service-detail-page">
      <header className="service-hero electrical-hero">
        <div className="overlay">
          <h1>Electrical Design</h1>
          <p>
            Safe, efficient, and code-compliant electrical systems for residential, commercial, and industrial projects.
          </p>
          <Link to="/services" className="back-toservices-button">
            Our Services
          </Link>
        </div>
      </header>

      <section className="service-section">
        <h2>Our Electrical Services</h2>
        <p>
          Our electrical design services cover lighting, power distribution, backup systems, and low-voltage wiring. We ensure safety, scalability, and seamless integration with plumbing and mechanical systems.
        </p>
        <ul>
          <li>Load calculations and distribution board schedules</li>
          <li>Lighting layouts with lux level analysis</li>
          <li>Wiring diagrams and circuit design</li>
          <li>Generator and solar backup integration</li>
          <li>Lightning protection and grounding design</li>
          <li>Telecom, data, and CCTV systems</li>
        </ul>
      </section>

      <section className="service-section">
        <h2>Technology & Compliance</h2>
        <p>
          We use Dialux, AutoCAD, and Revit for design modeling, and our designs follow IEEE standards, Uganda Electricity Distribution Code, and the National Electrical Code (NEC).
        </p>
      </section>

      <section className="service-section">
        <h2>Why Our Clients Trust Us</h2>
        <p>
          We prioritize safety, reliability, and power efficiency. Our team works closely with stakeholders to deliver power systems that are future-ready and budget-conscious.
        </p>
      </section>
    </div>
  );
};

export default Electrical;
