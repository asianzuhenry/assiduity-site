// src/pages/services/Architectural.jsx
import "../styles/pages/ServiceDetail.css";
import { Link } from "react-router-dom";

const Architectural = () => {
  return (
    <div className="service-detail-page">
      <header className="service-hero architectural-hero">
        <div className="overlay">
          <h1>Architectural Design</h1>
          <p>
            We create innovative, sustainable, and functional architectural designs tailored to your vision.
          </p>
          <Link to="/services" className="back-toservices-button">
            Our Services
          </Link>
        </div>
      </header>

      <section className="service-section">
        <h2>Our Architectural Services</h2>
        <p>
          Our architectural design services include residential, commercial, institutional, and industrial projects. We provide full-service planning, design, and coordination for your building needs.
        </p>
        <ul>
          <li>Site planning and zoning analysis</li>
          <li>2D and 3D design development (AutoCAD, Revit, ArchiCAD)</li>
          <li>3D visualization & rendering (Lumion, SketchUp)</li>
          <li>Interior and exterior architectural layout</li>
          <li>Sustainable and energy-efficient design solutions</li>
          <li>Permit-ready construction documents</li>
        </ul>
      </section>

      <section className="service-section">
        <h2>Our Approach</h2>
        <p>
          We believe in blending creativity, practicality, and compliance. Our designs are guided by client preferences, regulatory codes, and engineering integration. Whether it's a simple residence or a high-rise commercial building, our goal is timeless architectural beauty and long-term functionality.
        </p>
      </section>

      <section className="service-section">
        <h2>Why Choose Us?</h2>
        <p>
          We combine technical expertise with artistic vision. Our team works closely with engineers, builders, and clients to ensure your architectural vision becomes reality.
        </p>
      </section>
    </div>
  );
};

export default Architectural;
