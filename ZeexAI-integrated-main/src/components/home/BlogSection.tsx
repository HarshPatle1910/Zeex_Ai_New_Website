import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/card1.png";
import img2 from "../../assets/images/card2.png";
import img3 from "../../assets/images/card3.png";
import img4 from "../../assets/images/card4.png";
import img5 from "../../assets/images/card5.png";
import img6 from "../../assets/images/card6.png";

const blogImages = [img1, img2, img3, img4, img5, img6];

const blogLinks = [
  "/blog/ai-advancements",
  "/blog/privacy-security",
  "/blog/facial-recognition",
  "/blog/smart-home",
  "/blog/future-trends",
  "/blog/case-study"
];

const BlogSection: React.FC = () => {
  return (
    <section className="blog-section">
      <h2 className="blog-title">Latest Insights</h2>
      <h4 className="blog-subtitle">
        Stay updated with the latest in AI security technology
      </h4>

      <div className="blog-grid">
        {[1,2,3,4,5,6].map((i) => (
          <div className="blog-card1" key={i}>
            <img src={blogImages[i - 1]} className="blog-img" />
            <span className="blog-meta">
              <span className="blog-date">
                {i === 1 ? "April 15, 2025" :
                i === 2 ? "April 08, 2025" :
                i === 3 ? "March 25, 2025" :
                i === 4 ? "March 18, 2025" :
                i === 5 ? "April 01, 2025" : "March 10, 2025"}
              </span>

              <span className={`tag ${i % 2 === 0 ? "privacy" : "tech"}`}>
                  <span className="blog-category">
                      {i === 2 ? "Privacy" : 
                      i === 4 ? "Residential" : 
                      i === 5 ? "Trends" : 
                      i === 6 ? "Case Study" : "Technology"}
                  </span>
              </span>
            </span>
            <h3>
              {i === 1 ? "AI Advancements in Modern Surveillance" :
              i === 2 ? "Balancing Privacy with Security in AI Surveillance" :
              i === 3 ? "Facial Recognition: Myths & Realities" :
              i === 4 ? "Integrating AI Security into Your Smart Home" :
              i === 5 ? "5 Future Trends in AI Security for 2025" :
              "Case Study: How ZeexAI Protected a Major Retail Chain"}
            </h3>
            <p>
              {i === 1 ? "Explore how AI is revolutionizing modern surveillance systems and improving..." :
              i === 2 ? "How modern AI-powered security systems protect privacy while enhancing safety..." :
              i === 3 ? "Debunking common myths about facial recognition technology and explaining..." :
              i === 4 ? "A comprehensive guide on how to enhance your smart home with AI security..." :
              i === 5 ? "Discover emerging trends in AI security technology and how they will shape the..." :
              "An in-depth look at how our AI surveillance solutions reduced theft by 65% for a retail..."}
            </p>
            <Link to={blogLinks[i - 1]} className="read-more" style={{ textDecoration: 'none' }}>
              Read more
            </Link>

          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
