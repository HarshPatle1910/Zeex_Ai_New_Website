import React from "react";
import iitm from "../../assets/images/iitm.png";
import nirmaan from "../../assets/images/nirmaan.png";
import aws from "../../assets/images/aws.png";
import nvidia from "../../assets/images/nvidia.png";
const PartnerLogos: React.FC = () => {
  return (
    <section className="partner-logos">
  
      <div className="logo-card">
        <a href="https://www.iitm.ac.in/" target="_blank" rel="noopener noreferrer">
          <img src={iitm} className="logo-img" alt="iitm" />
        </a>
      </div>

      <div className="logo-card">
        <a href="https://nirmaan.iitm.ac.in/" target="_blank" rel="noopener noreferrer">
          <img src={nirmaan} className="logo-img" alt="nirmaan" />
        </a>
      </div>

      <div className="logo-card">
        <a href="https://aws.amazon.com/startups" target="_blank" rel="noopener noreferrer">
          <img src={aws} className="logo-img" alt="aws" />
        </a>
      </div>

      <div className="logo-card">
        <a href="https://www.nvidia.com/en-in/startups/" target="_blank" rel="noopener noreferrer">
          <img src={nvidia} className="logo-img" alt="nvidia" />
        </a>
      </div>
    </section>
  );
};

export default PartnerLogos;
