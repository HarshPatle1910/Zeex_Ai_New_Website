// Industries.tsx
import React, { useState, useRef, useEffect } from 'react';


interface Industry {
  id: number;
  name: string;
  description: string;
  features: string[];
  icon: string;
  gradient: string;
  stats: { value: string; label: string }[];
}

const Industries: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState<number>(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const industries: Industry[] = [
    {
      id: 1,
      name: "Retail & High-Risk Shops",
      description: "Advanced security solutions for retail stores, jewelry shops, and high-value merchandise outlets.",
      features: [
        "Theft prevention and detection",
        "Customer behavior analytics",
        "Inventory protection",
        "Staff safety monitoring",
        "Real-time incident response"
      ],
      icon: "🛍️",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      stats: [
        { value: "60%", label: "Reduction in theft" },
        { value: "24/7", label: "Store protection" },
        { value: "30s", label: "Alert response" }
      ]
    },
    {
      id: 2,
      name: "Banking & ATM Security",
      description: "Comprehensive security solutions for financial institutions and ATM locations.",
      features: [
        "Fraud detection systems",
        "ATM skimming prevention",
        "Vault access monitoring",
        "Customer safety assurance",
        "Regulatory compliance"
      ],
      icon: "🏦",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      stats: [
        { value: "99.9%", label: "Uptime guarantee" },
        { value: "50ms", label: "Detection speed" },
        { value: "0", label: "False positives" }
      ]
    },
    {
      id: 3,
      name: "Industrial Safety",
      description: "AI-powered monitoring for manufacturing plants, warehouses, and industrial facilities.",
      features: [
        "Worker safety compliance",
        "Equipment monitoring",
        "Hazard detection",
        "Access control systems",
        "Emergency response"
      ],
      icon: "🏭",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      stats: [
        { value: "45%", label: "Safety incidents down" },
        { value: "100%", label: "Compliance" },
        { value: "24/7", label: "Site monitoring" }
      ]
    },
    {
      id: 4,
      name: "Smart City Surveillance",
      description: "Intelligent urban security solutions for public spaces and critical infrastructure.",
      features: [
        "Traffic monitoring",
        "Public safety",
        "Crowd management",
        "Emergency response",
        "Infrastructure protection"
      ],
      icon: "🏙️",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      stats: [
        { value: "1M+", label: "Cameras managed" },
        { value: "80%", label: "Faster response" },
        { value: "AI", label: "Powered" }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const activeIndustryData = industries.find(ind => ind.id === activeIndustry);

  return (
    <section className="industries-section" ref={sectionRef}>
      <div className="industries-container">
        <div className="industries-header">
          <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
            Industry-Specific Solutions
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-in' : ''}`}>
            Tailored security solutions designed for your specific industry needs
          </p>
        </div>

        <div className="industries-content">
          {/* Industry Selector */}
          <div className="industry-selector">
            {industries.map((industry, index) => (
              <button
                key={industry.id}
                className={`industry-tab ${activeIndustry === industry.id ? 'active' : ''} ${
                  isVisible ? 'animate-in' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveIndustry(industry.id)}
              >
                <div className="tab-icon">{industry.icon}</div>
                <span className="tab-name">{industry.name}</span>
                <div className="tab-indicator"></div>
              </button>
            ))}
          </div>

          {/* Industry Details */}
          {activeIndustryData && (
            <div className="industry-details">
              <div className="details-content">
                <div className="details-text">
                  <h3 className="industry-name">{activeIndustryData.name}</h3>
                  <p className="industry-description">{activeIndustryData.description}</p>
                  
                  <div className="features-grid">
                    {activeIndustryData.features.map((feature, index) => (
                      <div key={index} className="feature-card">
                        <div 
                          className="feature-bullet"
                          style={{ background: activeIndustryData.gradient }}
                        ></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="industry-stats">
                    {activeIndustryData.stats.map((stat, index) => (
                      <div key={index} className="stat-card">
                        <div 
                          className="stat-value"
                          style={{ background: activeIndustryData.gradient }}
                        >
                          {stat.value}
                        </div>
                        <div className="stat-label">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <button className="industry-cta">
                    Learn More
                    <div className="cta-arrow">→</div>
                  </button>
                </div>

                <div className="details-visual">
                  <div 
                    className="visual-main"
                    style={{ background: activeIndustryData.gradient }}
                  >
                    <div className="floating-elements">
                      {[...Array(6)].map((_, i) => (
                        <div 
                          key={i} 
                          className="floating-element"
                          style={{ animationDelay: `${i * 0.5}s` }}
                        ></div>
                      ))}
                    </div>
                    <div className="visual-center">
                      <div className="center-icon">{activeIndustryData.icon}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Industries;