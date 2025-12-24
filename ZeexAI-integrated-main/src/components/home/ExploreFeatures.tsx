import React from "react";
import { Link } from "react-router-dom";
const ExploreFeatures: React.FC = () => {
    return (
        <div className="explore-wrapper">
            <Link to="/solution" className="explore-btn">
                Explore All Features
                <span className="arrow">→</span>
            </Link>
        </div>
    );
};

export default ExploreFeatures;
