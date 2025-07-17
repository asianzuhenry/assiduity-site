import "../styles/pages/UnderDevelopment.css";
import { Link } from "react-router-dom";

const UnderDevelopment = () => {
  return (
    <div className="under-dev-container">
      <div className="under-dev-content">
        <h1>🚧 Page Under Development</h1>
        <p>We're working hard to bring this page to life. Check back soon!</p>
        <Link to="/" className="go-home-button">← Back to Home</Link>
      </div>
    </div>
  );
};

export default UnderDevelopment;
