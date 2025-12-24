import React from "react";
 // optional if you separate CSS

interface CtaSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section id="cta-box" className="cta-section2">
      <div className="cta-content2">
        <h2 className="cta-title2">{title}</h2>
        <p className="cta-description2">{description}</p>

        <a href={buttonLink} className="cta-button1 cta-link">
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default CtaSection;
