// src/pages/Services.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/pages/Services.css";

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="hero-overlay">
          <h1>Our Core Services</h1>
          <p>
            At Assiduity Engineering Ltd, we specialize in delivering high-quality, tailored solutions in architectural design, mechanical systems, and electrical engineering across both residential and commercial projects.
          </p>
        </div>
      </section>

      <section className="services-list">
        <motion.div
          className="service-card"
          id="service-card1"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Plumbing Design</h3>
          <p>
            We provide professional plumbing design solutions for water supply, drainage, and sanitation systems in residential, commercial, and industrial buildings.
          </p>
          <p>
            Our team ensures compliance with building codes and environmental standards, offering detailed layout drawings and coordination with civil and mechanical systems.
          </p>
          <Link to="/services/plumbing" className="service-link">Learn more →</Link>
        </motion.div>

        <motion.div
          className="service-card"
          id="service-card2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Mechanical Design</h3>
          <p>
            Our mechanical engineering services include HVAC design, plumbing layouts, water supply systems, and fire protection systems for buildings of all types. We also handle equipment sizing, duct routing, energy efficiency modeling, and ventilation studies.
          </p>
          <p>
            We provide mechanical shop drawings and collaborate with contractors to ensure accurate implementation on site.
          </p>
          <Link to="/services/mechanical" className="service-link">Learn more →</Link>
        </motion.div>

        <motion.div
          className="service-card"
          id="service-card3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Electrical Design</h3>
          <p>
            We offer full-scale electrical design services including load estimation, wiring diagrams, lighting design, circuit breaker schedules, power distribution, generator backup integration, and lightning protection systems.
          </p>
          <p>
            Our designs ensure compliance with national electrical codes and emphasize safety, efficiency, and future scalability for all projects.
          </p>
          <Link to="/services/electrical" className="service-link">Learn more →</Link>
        </motion.div>
      </section>

      <motion.section
        className="services-cta"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="services-cta-div">
          <h2>Need a customized solution?</h2>
          <p>
            Let us help you design, plan, and implement infrastructure that meets your exact requirements. Whether it's a small home upgrade or a large-scale institutional project — we deliver excellence.
          </p>
          <Link to="/contact" className="cta-button">Contact Us</Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
