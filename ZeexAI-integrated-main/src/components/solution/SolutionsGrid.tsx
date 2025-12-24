// SolutionsGrid.tsx
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


interface Solution {
  id: number;
  title: string;
  description: string;
  features: string[];
  visualType: 'particles' | 'waves' | 'grid' | 'circuit' | 'radar' | 'network' | 'hexagon' | 'binary' | 'analytics' | 'shield' | 'lock' | 'access';
  gradient: string;
  accentColor: string;
  image: string;
  imageAlt: string;
}

const SolutionsGrid: React.FC = () => {
  const navigate = useNavigate();
  const [activeSolution, setActiveSolution] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const solutions: Solution[] = [
    {
      id: 1,
      title: "Advanced Threat Detection",
      description: "Our AI-powered threat detection system continuously monitors and identifies potential security risks before they become problems.",
      features: [
        "24/7 continuous monitoring",
        "AI-powered anomaly detection",
        "Real-time risk assessment",
        "Automated threat classification",
        "Historical pattern analysis"
      ],
      visualType: 'radar',
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      accentColor: "#667eea",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&auto=format",
      imageAlt: "AI threat detection radar interface"
    },
    {
      id: 2,
      title: "AI-Visual Surveillance Analytics",
      description: "Intelligent video analysis detects unusual patterns while ensuring privacy and compliance.",
      features: [
        "Real-time video processing",
        "Privacy-preserving analytics",
        "Custom detection rules",
        "Multi-camera tracking",
        "Behavioral analysis"
      ],
      visualType: 'grid',
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      accentColor: "#f5576c",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop&auto=format",
      imageAlt: "Multiple camera feeds with AI analytics"
    },
    {
      id: 3,
      title: "Multi-Layered Smart Alert System",
      description: "Configure alert priorities and customize who gets notified—ensuring the right people respond at the right time.",
      features: [
        "Add multiple notification recipients",
        "Multi-channel alerts via SMS, WhatsApp, Email",
        "Alert-level customization",
        "Real-time escalation protocols",
        "Easy configuration from your dashboard"
      ],
      visualType: 'waves',
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      accentColor: "#4facfe",
      image: "https://images.unsplash.com/photo-1708807472445-d33589e6b090?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fE11bHRpLUxheWVyZWQlMjBTbWFydCUyMEFsZXJ0JTIwU3lzdGVtfGVufDB8fDB8fHww",
      imageAlt: "Multi-layered alert system interface"
    },
    {
      id: 4,
      title: "Mobile-Based App Services",
      description: "Access and control your security ecosystem from anywhere.",
      features: [
        "Real-time security alerts",
        "Live camera feed access",
        "User-based access permissions",
        "Instant incident notifications",
        "Seamless mobile experience"
      ],
      visualType: 'circuit',
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      accentColor: "#43e97b",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
      imageAlt: "Mobile security app interface"
    },
    {
      id: 5,
      title: "Web-Based AI Dashboard",
      description: "Monitor, manage, and analyze operations through our AI-powered control center.",
      features: [
        "Real-time activity tracking",
        "AI model control panel",
        "Incident logs & analytics",
        "Multi-location support",
        "Visual heatmaps & trends"
      ],
      visualType: 'particles',
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      accentColor: "#fa709a",
      image: "https://images.unsplash.com/photo-1638845604906-6c87bd9ddd01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fFdlYi1CYXNlZCUyMEFJJTIwRGFzaGJvYXJkfGVufDB8fDB8fHww",
      imageAlt: "Web-based AI dashboard interface"
    },
    {
      id: 6,
      title: "Integrated Device Health Check",
      description: "Stay informed with automated hardware diagnostics and alerts.",
      features: [
        "Offline device detection",
        "Thermal & battery diagnostics",
        "Predictive maintenance alerts",
        "Health metrics dashboard",
        "Scheduled status reporting"
      ],
      visualType: 'hexagon',
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      accentColor: "#a8edea",
      image: "https://images.unsplash.com/photo-1747224317356-d4a8c380b028?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Device health monitoring dashboard"
    },
    {
      id: 7,
      title: "Cloud & On-Premise Deployment",
      description: "Choose the infrastructure that fits your enterprise—flexible and secure.",
      features: [
        "Scalable cloud hosting",
        "On-premise AI integration",
        "Encrypted data processing",
        "Edge computing capabilities",
        "Full control & data ownership"
      ],
      visualType: 'network',
      gradient: "linear-gradient(135deg, #cd9cf2 0%, #f6f3ff 100%)",
      accentColor: "#cd9cf2",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&auto=format",
      imageAlt: "Cloud and on-premise deployment architecture"
    },
    {
      id: 8,
      title: "Custom AI Model Allocation per Camera",
      description: "Deploy and manage different AI models for specific camera locations—tailored to your security priorities.",
      features: [
        "Assign AI models per camera",
        "Location-specific intelligence",
        "Real-time model switching",
        "Unified dashboard for all model insights",
        "Efficient resource usage with task-optimized models"
      ],
      visualType: 'binary',
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
      accentColor: "#fcb69f",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop&auto=format",
      imageAlt: "Custom AI model allocation interface"
    },
    {
      id: 9,
      title: "Real-Time Activity Analytics Dashboard",
      description: "Visualize and compare AI insights across customer behavior, employee activity, safety events, and operational metrics—all in one unified dashboard.",
      features: [
        "Real-time graphs for customer flow",
        "Timeline-based activity heatmaps",
        "Category-wise breakdown",
        "Location-wise performance trends",
        "AI-backed forecasting and anomaly detection"
      ],
      visualType: 'analytics',
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      accentColor: "#667eea",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
      imageAlt: "Real-time analytics dashboard"
    },
    {
      id: 10,
      title: "Smart Data Protection",
      description: "Secure storage and encryption of all your surveillance data with advanced protection measures.",
      features: [
        "Military-grade encryption",
        "Role-based access controls",
        "Automated retention policies",
        "Tamper-proof audit logs",
        "Geofenced data storage"
      ],
      visualType: 'shield',
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      accentColor: "#f5576c",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop&auto=format",
      imageAlt: "Data protection and encryption"
    },
    {
      id: 11,
      title: "Remote Access Control",
      description: "Manage and control your security system from anywhere with our secure mobile platform.",
      features: [
        "Mobile app control",
        "Biometric authentication",
        "Temporary access grants",
        "Usage analytics",
        "Emergency lockdown"
      ],
      visualType: 'access',
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      accentColor: "#4facfe",
      image: "https://plus.unsplash.com/premium_photo-1663054919747-d237d710c70e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fFJlbW90ZSUyMEFjY2VzcyUyMENvbnRyb2x8ZW58MHx8MHx8fDA%3D",
      imageAlt: "Remote access control interface"
    },
    {
      id: 12,
      title: "Network Security",
      description: "Protect your surveillance network from cyber threats with our advanced security measures.",
      features: [
        "Intrusion prevention",
        "Device authentication",
        "Encrypted communications",
        "Vulnerability scanning",
        "Anomaly detection"
      ],
      visualType: 'lock',
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      accentColor: "#43e97b",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop&auto=format",
      imageAlt: "Network security protection"
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

  const renderVisual = (solution: Solution) => {
    return (
      <div className="visual-container">
        <div className="image-container">
          <img 
            src={solution.image} 
            alt={solution.imageAlt}
            className="solution-image"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://via.placeholder.com/400x250/1a1a2e/ffffff?text=${encodeURIComponent(solution.title)}`;
            }}
          />
          <div className="image-overlay" style={{ background: solution.gradient }}></div>
        </div>
        
        <div className="animated-elements">
          {renderAnimatedElements(solution.visualType)}
        </div>
      </div>
    );
  };

  const renderAnimatedElements = (visualType: string) => {
    switch (visualType) {
      case 'particles':
        return (
          <div className="particles-animation">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="particle" style={{ animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
        );
      case 'waves':
        return (
          <div className="waves-animation">
            <div className="wave wave-1"></div>
            <div className="wave wave-2"></div>
            <div className="wave wave-3"></div>
          </div>
        );
      case 'grid':
        return (
          <div className="grid-animation">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="grid-cell" style={{ animationDelay: `${i * 0.05}s` }} />
            ))}
          </div>
        );
      case 'circuit':
        return (
          <div className="circuit-animation">
            <div className="circuit-line horizontal"></div>
            <div className="circuit-line vertical"></div>
            <div className="circuit-node"></div>
            <div className="pulse-dot"></div>
          </div>
        );
      case 'radar':
        return (
          <div className="radar-animation">
            <div className="radar-sweep"></div>
            <div className="radar-dot dot-1"></div>
            <div className="radar-dot dot-2"></div>
            <div className="radar-dot dot-3"></div>
          </div>
        );
      case 'network':
        return (
          <div className="network-animation">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="network-node" style={{ animationDelay: `${i * 0.3}s` }}>
                <div className="node-pulse"></div>
              </div>
            ))}
          </div>
        );
      case 'hexagon':
        return (
          <div className="hexagon-animation">
            <div className="hexagon hex-1"></div>
            <div className="hexagon hex-2"></div>
            <div className="hexagon hex-3"></div>
            <div className="hexagon hex-4"></div>
          </div>
        );
      case 'binary':
        return (
          <div className="binary-animation">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="binary-digit" style={{ animationDelay: `${i * 0.1}s` }}>
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        );
      case 'analytics':
        return (
          <div className="analytics-animation">
            <div className="chart-bar bar-1"></div>
            <div className="chart-bar bar-2"></div>
            <div className="chart-bar bar-3"></div>
            <div className="chart-bar bar-4"></div>
            <div className="chart-line"></div>
          </div>
        );
      case 'shield':
        return (
          <div className="shield-animation">
            <div className="shield"></div>
            <div className="shield-glow"></div>
          </div>
        );
      case 'lock':
        return (
          <div className="lock-animation">
            <div className="lock-body"></div>
            <div className="lock-shackle"></div>
            <div className="lock-glow"></div>
          </div>
        );
      case 'access':
        return (
          <div className="access-animation">
            <div className="access-point point-1"></div>
            <div className="access-point point-2"></div>
            <div className="access-point point-3"></div>
            <div className="access-line"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="solutions-section" ref={sectionRef}>
      <div className="solutions-container">
        <div className="solutions-header">
          <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
            Comprehensive Security Solutions
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-in' : ''}`}>
            Our complete suite of AI-powered security solutions designed to protect your assets and provide peace of mind.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`solution-card ${activeSolution === solution.id ? 'active' : ''} ${
                isVisible ? 'animate-in' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveSolution(solution.id)}
              onMouseLeave={() => setActiveSolution(null)}
            >
              <div className="card-visual">
                {renderVisual(solution)}
              </div>
              
              <div className="card-content1">
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-description">{solution.description}</p>
                
                <div className="features-list">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <div 
                        className="feature-bullet"
                        style={{ backgroundColor: solution.accentColor }}
                      ></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  className="get-started-btn"
                  onClick={() => navigate('/contact')}
                  style={{ 
                    backgroundColor: solution.accentColor,
                    '--hover-color': solution.accentColor
                  } as React.CSSProperties}
                >
                  Get Started
                  <div className="btn-arrow">→</div>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
<div className="why-choose-section">
  <h3 className="why-choose-title">Why Choose Our Security Solutions</h3>
  <p className="why-choose-subtitle">
    Integrated features that work together to provide complete protection for your property
  </p>
  
  <div className="benefits-grid">

    <div className="benefit-card">
      <div className="benefit-icon">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/10905/10905891.png" 
          alt="AI"
          width="50"
          height="50"
        />
      </div>
      <h4>AI-Powered Protection</h4>
      <p>Advanced machine learning algorithms detect and prevent threats before they occur.</p>
    </div>

    <div className="benefit-card">
      <div className="benefit-icon">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/159/159604.png" 
          alt="Monitoring"
          width="50"
          height="50"
        />
      </div>
      <h4>24/7 Monitoring</h4>
      <p>Continuous surveillance with real-time alerts for any suspicious activity.</p>
    </div>

    <div className="benefit-card">
      <div className="benefit-icon">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/2889/2889676.png" 
          alt="Secure Storage"
          width="50"
          height="50"
        />
      </div>
      <h4>Secure Data Storage</h4>
      <p>Encrypted cloud storage with military-grade protection for all your footage.</p>
    </div>

    <div className="benefit-card">
      <div className="benefit-icon">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" 
          alt="Access Control"
          width="50"
          height="50"
        />
      </div>
      <h4>Access Control</h4>
      <p>Manage permissions and access from anywhere with our secure platform.</p>
    </div>

    <div className="benefit-card">
      <div className="benefit-icon">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
          alt="Scalability"
          width="50"
          height="50"
        />
      </div>
      <h4>Scalable Solutions</h4>
      <p>Grow your security infrastructure seamlessly as your business expands.</p>
    </div>

    <div className="benefit-card">
      <div className="benefit-icon">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png" 
          alt="Support"
          width="50"
          height="50"
        />
      </div>
      <h4>Expert Support</h4>
      <p>Dedicated support team available 24/7 to assist with any security needs.</p>
    </div>

  </div>
</div>

<div className={`solutions-cta ${isVisible ? 'animate-in' : ''}`}>
  <h3>Ready to Enhance Your Security?</h3>
  <p>Our team is ready to help you implement the perfect security solution for your needs.</p>
  <button className="cta-button" onClick={() => navigate('/contact')}>
    Request a Consultation
    <div className="cta-sparkle">✨</div>
  </button>
</div>

      </div>
    </section>
  );
};

export default SolutionsGrid;