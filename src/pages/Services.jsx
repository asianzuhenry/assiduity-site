// src/pages/Services.jsx
// import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/pages/Services.css";
import CTAImage from "../assets/project1.webp"; // make sure this image exists
import CTA from "../components/CTA";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <>

      <Helmet>
        <title>Our Services | Assiduity Engineering Ltd</title>
        <meta name="description" content="Explore our full range of services including architectural design, mechanical systems, electrical installations, and plumbing solutions." />
        <meta name="keywords" content="architectural services, mechanical design, electrical systems, plumbing plans, Uganda construction engineering" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="services-page">
        <section className="services-hero">
          <div className="hero-overlay">
            <h1>Our Core Services</h1>
            <p>
                At Assiduity Engineering Ltd, we offer expert design services in Mechanical, Electrical, Plumbing, and Furniture. Our solutions integrate creativity and technical precision across every space we shape — from residential units to commercial and industrial facilities.
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
            {
              title: "Furniture Design",
              desc1: "Our custom furniture design services blend aesthetics with functionality. We design and specify furniture pieces tailored for residential, office, and commercial interiors—balancing space, comfort, and durability.",
              desc2: "We handle everything from concept sketches to final layout plans, collaborating closely with interior teams and ensuring all dimensions meet client expectations.",
              toLink: "/services/furniture",
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
    </>
  );
};

export default Services;
