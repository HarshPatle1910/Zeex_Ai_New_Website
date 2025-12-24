import React from "react";
import { Link } from "react-router-dom";
const ViewBlogs: React.FC = () => {
    return (
        <div className="services-wrapper">
            
            <Link to="/blogs" className="explore-btn">
                View all blog posts
                <span className="arrow">→</span>
            </Link>
        
        </div>
    );
};

export default ViewBlogs;