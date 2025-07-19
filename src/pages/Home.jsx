// Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaWater, FaTools, FaBolt } from "react-icons/fa"; // Example icons
import "../styles/pages/Home.css"; // make sure this CSS file exists
import heroImage from "../assets/hero-image.webp"; // make sure this image exists
import CTAImage from "../assets/project1.webp"; // make sure this image exists
import project1 from "../assets/electric1.webp";
import project2 from "../assets/project3.webp";
import project3 from "../assets/plumbing2.webp";

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
                            icon: <FaWater />,
                            title: "Plumbing Design",
                            desc:
                                "Our plumbing design services ensure reliable, efficient, and sustainable water systems across all building types.",
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
                    {[
                        {
                            imgsrc: project1,
                            title: "PrimeTech Towers – Kampala CBD",
                            desc:
                                "A high-rise commercial building housing tech startups and co-working spaces. Our team provided complete electrical designs including load estimation, floor-by-floor lighting plans, and CCTV/data integration — with LEED-compliant energy efficiency modeling.",
                        },
                        {
                            imgsrc: project2,
                            title: "MakTech Research Labs – Makerere",
                            desc:
                                "An institutional project requiring advanced mechanical systems for ventilation, pressure zoning, and safety integration. We handled mechanical planning, electrical layout design, and coordinated fire suppression systems with BIM documentation.",
                        },
                        {
                            imgsrc: project3,
                            title: "Urban Heights Apartments – Ntinda",
                            desc:
                                "A plumbing overhaul project for a residential complex facing drainage failures. We redesigned the entire water management system, improved wastewater flow, and implemented a rainwater harvesting system to boost sustainability and efficiency.",
                        }].map((project, index) => (
                            <motion.div
                                key={index}
                                className="project-card"
                                whileHover={{ scale: 1.02 }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <img src={project.imgsrc} alt={`Project ${index + 1}`} />
                                <h4>{project.title}</h4>
                                <p style={{ padding: "0 15px 20px" }}>
                                    {project.desc}
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
