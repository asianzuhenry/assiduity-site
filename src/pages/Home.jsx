// Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaDraftingCompass, FaTools, FaBolt } from "react-icons/fa"; // Example icons
import "../styles/pages/Home.css"; // make sure this CSS file exists
import heroImage from "../assets/hero-image.png"; // make sure this image exists
import CTAImage from "../assets/project1.png"; // make sure this image exists
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project1.png";

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <motion.section
                className="hero"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                    backgroundImage: `url(${heroImage})`,
                }}
            >
                <div className="hero-text">
                    <h1>Engineering Designs that Build the Future</h1>
                    <p>
                        Assiduity Engineering offers cutting-edge architectural, mechanical,
                        and electrical design solutions. We turn ideas into functional,
                        aesthetic, and sustainable spaces.
                    </p>
                    <a className="hero-btn" href="#services">Explore Our Services</a>
                </div>
            </motion.section>

            {/* Services Overview */}
            <section className="services-intro" id="services">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Services
                </motion.h2>
                <p className="description">
                    These are our core services — each tailored to meet industry standards and client expectations in every project we undertake.
                </p>

                <div className="services-grid">
                    {[
                        {
                            icon: <FaDraftingCompass />,
                            title: "Architectural Design",
                            desc:
                                "We craft building designs that merge form and function, ensuring structural integrity, regulatory compliance, and aesthetic impact.",
                        },
                        {
                            icon: <FaTools />,
                            title: "Mechanical Design",
                            desc:
                                "From HVAC to fire protection systems, our mechanical designs focus on safety, efficiency, and environmental comfort.",
                        },
                        {
                            icon: <FaBolt />,
                            title: "Electrical Design",
                            desc:
                                "Power distribution, lighting, and smart systems — we create scalable electrical layouts for modern infrastructure.",
                        },
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="service-div">
                                <div className="icon">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                            </div>
                            <p>{service.desc}</p>

                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Projects */}
            <section className="featured-projects">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Featured Projects
                </motion.h2>
                <p className="description">
                    A showcase of our recent works — from homes to industrial systems — designed and delivered with precision.
                </p>

                <div className="projects-grid">
                    {[project1, project2, project3].map((img, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            whileHover={{ scale: 1.02 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <img src={img} alt={`Project ${index + 1}`} />
                            <h4>Project Title {index + 1}</h4>
                            <p style={{ padding: "0 15px 20px" }}>
                                A detailed brief about the design goals, systems used, and final outcome of this project.
                            </p>
                        </motion.div>
                    ))}
                </div>
                    <Link to="/projects" className="view-all">
                        View All Projects
                    </Link>
            </section>
            {/* Call to Action */}
            <section className="cta-banner"
                style={{
                    backgroundImage: `url(${CTAImage})`,
                }}
            >
                <div className="content">
                    <h2>Have a project in mind?</h2>
                    <p>
                        Let Assiduity Engineering help you bring it to life with expert AME
                        design services.
                    </p>
                    <Link to="/contact" className="cta-button">
                        Contact Us
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
