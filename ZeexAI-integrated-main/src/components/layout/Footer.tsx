import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { 
  faLinkedinIn, 
  faTwitter, 
  faYoutube, 
  faInstagram 
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-col brand">
          <h2>ZeexAI</h2>
          <p>
            Harnessing the power of data and artificial intelligence, Zeeex AI empowers
            organizations to predict risks, ensure safety, and optimize operations.
          </p>

          <div className="footer-social">
            <a 
              href="https://www.linkedin.com/company/zeex-ai/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            <a 
              href="https://x.com/ZEEX_AI"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>

            <a 
              href="https://www.youtube.com/@zeexai"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a 
              href="https://www.instagram.com/zeex_ai/"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Solutions</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3>Our Services</h3>
          <a href="#">Retail Shop Security</a>
          <a href="#">Bank Security</a>
          <a href="#">Industrial Monitoring</a>
          <a href="#">Smart City Surveillance</a>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p><FontAwesomeIcon icon={faPhone} />  +91 8709221636</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> admin@zeeexai.com</p>
          <p><FontAwesomeIcon icon={faLocationDot} /> Nirmaan, CFI, IIT Madras</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-left">
          © 2025 ZeeexAI — All Rights Reserved
        </div>

        <div className="footer-right">
          <Link to="/Privacy">Privacy Policy</Link>
          <span>|</span>
          <Link to="/terms">Terms of Service</Link>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
