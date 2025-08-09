// src/pages/services/Mechanical.jsx
import "../styles/pages/ServiceDetail.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Mechanical = () => {
  return (
    <>
      <Helmet>
        <title>Mechanical Design | Assiduity Engineering Ltd</title>
        <meta name="description" content="HVAC, plumbing, and mechanical system design for residential, commercial, and industrial buildings across Uganda." />
        <meta name="keywords" content="HVAC design, plumbing layout, mechanical systems Uganda, fire protection design" />
      </Helmet>

      <div className="service-detail-page">
        <header className="service-hero mechanical-hero">
          <div className="overlay">
            <h1>Mechanical Design</h1>
            <p>
              Expert mechanical design for HVAC, plumbing, and fire protection systems tailored for all building types.
            </p>
            <Link to="/services" className="back-toservices-button">
              Our Services
            </Link>
          </div>
        </header>

        <section className="service-section">
          <h2>Our Mechanical Services</h2>
          <p>
            We offer comprehensive mechanical engineering services for residential, commercial, and industrial infrastructure. Our team provides accurate, code-compliant solutions that ensure comfort, safety, and energy efficiency.
          </p>
          <ul>
            <li>HVAC design (heating, ventilation, air conditioning)</li>
            <li>Water supply and distribution system layout</li>
            <li>Drainage, wastewater, and stormwater system design</li>
            <li>Fire protection and sprinkler system design</li>
            <li>Mechanical system sizing and energy modeling</li>
            <li>Mechanical coordination and shop drawings</li>
          </ul>
        </section>

        <section className="service-section">
          <h2>Design Tools & Compliance</h2>
          <p>
            We utilize AutoCAD MEP, Revit MEP, and HAP (Hourly Analysis Program) to simulate building loads and size equipment. All designs conform to ASHRAE standards and local mechanical codes.
          </p>
        </section>

        <section className="service-section">
          <h2>Our Commitment</h2>
          <p>
            We design systems that perform reliably under real-world conditions. Our mechanical solutions focus on efficiency, maintainability, and long-term functionality.
          </p>
        </section>
      </div>
    </>
  );
};

export default Mechanical;
