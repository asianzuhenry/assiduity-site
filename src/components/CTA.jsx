import { Link } from "react-router-dom";
import "../styles/components/CTA.css"

const CTA = ({ backgroundImageLink, Title, Description }) => {
    return (
        <section className="cta-banner"
            style={{
                backgroundImage: `url(${backgroundImageLink})`,
            }}
        >
            <div className="content">
                <h2>{Title}</h2>
                <p>{Description}</p>
                <Link to="/contact" className="cta-button">
                    Contact Us
                </Link>
            </div>
        </section>
    )
}

export default CTA;