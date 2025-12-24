// TechDeepDive.tsx
import React, { useState, useRef, useEffect } from 'react';


interface TechFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  details: string[];
  performance: { metric: string; value: string }[];
}

const TechDeepDive: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const techFeatures: TechFeature[] = [
    {
      id: 1,
      title: "Neural Network Architecture",
      description: "Advanced deep learning models trained on millions of security scenarios",
      icon: "🧠",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      details: [
        "Multi-layer perceptron with 50+ hidden layers",
        "Real-time adaptive learning algorithms",
        "Transfer learning for rapid deployment",
        "Federated learning for privacy preservation"
      ],
      performance: [
        { metric: "Accuracy", value: "99.8%" },
        { metric: "Processing Speed", value: "50ms" },
        { metric: "Model Size", value: "2.3GB" }
      ]
    },
    {
      id: 2,
      title: "Edge Computing",
      description: "Process data locally for instant response and reduced latency",
      icon: "⚡",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      details: [
        "On-device AI inference",
        "Low-latency processing (<100ms)",
        "Bandwidth optimization",
        "Offline operation capability"
      ],
      performance: [
        { metric: "Latency", value: "<100ms" },
        { metric: "Bandwidth Saved", value: "85%" },
        { metric: "Uptime", value: "99.99%" }
      ]
    },
    {
      id: 3,
      title: "Computer Vision",
      description: "State-of-the-art image and video analysis capabilities",
      icon: "👁️",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      details: [
        "Real-time object detection",
        "Facial recognition (opt-in)",
        "Behavioral pattern analysis",
        "Anomaly detection in crowded spaces"
      ],
      performance: [
        { metric: "Detection Rate", value: "99.5%" },
        { metric: "False Positives", value: "0.2%" },
        { metric: "Frames Processed", value: "60fps" }
      ]
    },
    {
      id: 4,
      title: "Blockchain Security",
      description: "Immutable audit trails and secure data storage",
      icon: "⛓️",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      details: [
        "Tamper-proof event logging",
        "Decentralized storage",
        "Cryptographic verification",
        "Smart contract automation"
      ],
      performance: [
        { metric: "Data Integrity", value: "100%" },
        { metric: "Encryption", value: "AES-256" },
        { metric: "Audit Trail", value: "Immutable" }
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

  const activeFeatureData = techFeatures.find(feature => feature.id === activeFeature);

  return (
    <section className="tech-deep-dive" ref={sectionRef}>
      <div className="tech-container">
        <div className="tech-header">
          <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
            Advanced Technology Stack
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-in' : ''}`}>
            Powered by cutting-edge AI and machine learning technologies
          </p>
        </div>

        <div className="tech-content">
          <div className="tech-sidebar">
            {techFeatures.map((feature, index) => (
              <button
                key={feature.id}
                className={`tech-nav-item ${activeFeature === feature.id ? 'active' : ''} ${
                  isVisible ? 'animate-in' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setActiveFeature(feature.id)}
              >
                <div 
                  className="nav-icon"
                  style={{ background: feature.gradient }}
                >
                  {feature.icon}
                </div>
                <div className="nav-text">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
                <div className="nav-indicator"></div>
              </button>
            ))}
          </div>

          <div className="tech-details">
            {activeFeatureData && (
              <div className="details-container">
                <div className="details-header">
                  <div 
                    className="feature-icon-large"
                    style={{ background: activeFeatureData.gradient }}
                  >
                    {activeFeatureData.icon}
                  </div>
                  <div className="header-text">
                    <h3>{activeFeatureData.title}</h3>
                    <p>{activeFeatureData.description}</p>
                  </div>
                </div>

                <div className="details-grid">
                  <div className="features-list">
                    <h4>Key Features</h4>
                    <div className="features-grid">
                      {activeFeatureData.details.map((detail, index) => (
                        <div key={index} className="feature-item">
                          <div 
                            className="feature-marker"
                            style={{ background: activeFeatureData.gradient }}
                          ></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="performance-metrics">
                    <h4>Performance Metrics</h4>
                    <div className="metrics-grid">
                      {activeFeatureData.performance.map((metric, index) => {
                        const shouldBeWhite = ['Accuracy', 'Processing Speed'].includes(metric.metric);
                        return (
                          <div key={index} className="metric-card">
                            <div 
                              className="metric-value"
                              style={shouldBeWhite ? { 
                                color: 'white',
                                WebkitTextFillColor: 'white',
                                background: 'none',
                                backgroundClip: 'unset'
                              } : { background: activeFeatureData.gradient }}
                            >
                              {metric.value}
                            </div>
                            <div className="metric-label">{metric.metric}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="tech-visualization">
                  <div 
                    className="visual-container"
                    style={{ background: activeFeatureData.gradient }}
                  >
                    <div className="neural-network">
                      {[...Array(5)].map((_, layer) => (
                        <div key={layer} className="network-layer">
                          {[...Array(3 + layer)].map((_, node) => (
                            <div 
                              key={node} 
                              className="network-node"
                              style={{ animationDelay: `${(layer + node) * 0.2}s` }}
                            ></div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechDeepDive;