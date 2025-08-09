// src/pages/services/Furniture.jsx
import "../styles/pages/ServiceDetail.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Furniture = () => {
  return (
    <div className="service-detail-page">
      <Helmet>
        <title>Furniture Design | Assiduity Engineering Ltd</title>
        <meta name="description" content="Custom furniture design services for residential and commercial spaces." />
        <meta name="keywords" content="furniture design, custom furniture, interior design, office furniture" />
      </Helmet>
      <header className="service-hero furniture-hero">
        <div className="overlay">
          <h1>Furniture Design</h1>
          <p>
            A perfect blend of function, comfort, and visual appeal — tailored to fit your space and lifestyle.
          </p>
          <Link to="/services" className="back-toservices-button">
            Our Services
          </Link>
        </div>
      </header>

      <section className="service-section">
        <h2>Our Furniture Services</h2>
        <p>
          We design unique, high-quality furniture pieces for homes, offices, and commercial interiors. From ergonomic office desks to elegant dining sets, our team brings vision and comfort together.
        </p>
        <ul>
          <li>Custom design for beds, sofas, tables, cabinets & more</li>
          <li>Modular office furniture layouts</li>
          <li>3D modeling and detailed fabrication drawings</li>
          <li>Material selection and ergonomic planning</li>
          <li>Coordination with interior design and MEP layouts</li>
        </ul>
      </section>

      <section className="service-section">
        <h2>Design Approach</h2>
        <p>
          Our process begins with understanding client lifestyle or work culture. We prioritize user comfort, modern styling, and efficient space utilization, producing models and specs ready for manufacturing.
        </p>
      </section>
    </div>
  );
};

export default Furniture;
