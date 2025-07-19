// src/pages/services/Plumbing.jsx
import "../styles/pages/ServiceDetail.css";
import { Link } from "react-router-dom";

const Plumbing = () => {
  return (
    <div className="service-detail-page">
      <header className="service-hero plumbing-hero">
        <div className="overlay">
          <h1>Plumbing Design</h1>
          <p>
            Efficient water supply and drainage systems that comply with safety and environmental standards.
          </p>
          <Link to="/services" className="back-toservices-button">
            Our Services
          </Link>
        </div>
      </header>

      <section className="service-section">
        <h2>Our Plumbing Services</h2>
        <p>
          We deliver detailed plumbing designs for all types of buildings — from residential homes to large-scale commercial projects. Our services are reliable, sustainable, and tailored to client needs.
        </p>
        <ul>
          <li>Potable water system design and layout</li>
          <li>Hot/cold water piping with pressure zones</li>
          <li>Greywater and blackwater drainage design</li>
          <li>Stormwater and rainwater harvesting systems</li>
          <li>Toilet & sanitary fixture coordination</li>
          <li>Plumbing schematics and isometric drawings</li>
        </ul>
      </section>

      <section className="service-section">
        <h2>Regulations & Technology</h2>
        <p>
          Our plumbing systems comply with international plumbing codes and local water authority guidelines. We use tools like AutoCAD MEP, Revit, and Ecodomus for clash detection and coordination.
        </p>
      </section>

      <section className="service-section">
        <h2>Why It Matters</h2>
        <p>
          Poor plumbing design can lead to costly maintenance issues and water inefficiencies. We design with long-term reliability, safety, and water conservation in mind.
        </p>
      </section>
    </div>
  );
};

export default Plumbing;
