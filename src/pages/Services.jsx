// src/pages/Services.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/pages/Services.css";
import CTAImage from "../assets/project1.webp"; // make sure this image exists
import CTA from "../components/CTA";

const Services = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="hero-overlay">
          <h1>Our Core Services</h1>
          <p>
            At Assiduity Engineering Ltd, we specialize in delivering high-quality, tailored solutions in plumbing design, mechanical systems, and electrical engineering across both residential and commercial projects.
          </p>
        </div>
      </section>

      <section className="services-list">
        {/*  */}
        {[
          {
            title: "Plumbing Design",
            desc1: "We provide professional plumbing design solutions for water supply, drainage, and sanitation systems in residential, commercial, and industrial buildings.",
            desc2: "Our team ensures compliance with building codes and environmental standards, offering detailed layout drawings and coordination with civil and mechanical systems.",
            toLink: "/services/plumbing",
          },
          {
            title: "Mechanical Design",
            desc1: "Our mechanical engineering services include HVAC design, plumbing layouts, water supply systems, and fire protection systems for buildings of all types. We also handle equipment sizing, duct routing, energy efficiency modeling, and ventilation studies.",
            desc2: "We provide mechanical shop drawings and collaborate with contractors to ensure accurate implementation on site.",
            toLink: "/services/mechanical",
          },
          {
            title: "Electrical Design",
            desc1: "We offer full-scale electrical design services including load estimation, wiring diagrams, lighting design, circuit breaker schedules, power distribution, generator backup integration, and lightning protection systems.",
            desc2: "Our designs ensure compliance with national electrical codes and emphasize safety, efficiency, and future scalability for all projects.",
            toLink: "/services/electrical",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="services-card"
          >
            <div className="services-div">
              <h3>{service.title}</h3>
            </div>
            <p>{service.desc1}</p>
            <p>{service.desc2}</p>

            <Link to={service.toLink} className="services-link">Learn more →</Link>
            <hr />
          </div>
        ))}
        {/*  */}
      </section>
      <CTA backgroundImageLink={CTAImage} Title={"Need a customized solution?"} Description={"Let us help you design, plan, and implement infrastructure that meets your exact requirements. Whether it's a small home upgrade or a large-scale institutional project — we deliver excellence."} />
    </div>
  );
};

export default Services;
