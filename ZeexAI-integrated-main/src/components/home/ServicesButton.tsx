import React from "react";
import { Link } from "react-router-dom";

const ExploreFeatures: React.FC = () => {
    return (
        <div className="services-wrapper">
            <Link to="/services" className="services-btn">
                View all Services
                <span className="arrow">→</span>
            </Link>
        </div>
    );
};

export default ExploreFeatures;
