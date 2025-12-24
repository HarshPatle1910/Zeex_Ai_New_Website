// Testimonials.tsx
import React, { useState, useEffect, useRef } from 'react';


interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  industry: string;
}

const Testimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Chen",
      position: "Security Director",
      company: "Global Retail Chain",
      content: "ZeexAI reduced our security incidents by 75% in the first 3 months. The AI-powered threat detection is incredibly accurate and has significantly improved our response times.",
      rating: 5,
      avatar: "👩‍💼",
      industry: "Retail"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      position: "CTO",
      company: "National Bank",
      content: "The multi-layered alert system has revolutionized our security operations. We can now respond to threats in real-time with precise escalation protocols.",
      rating: 5,
      avatar: "👨‍💼",
      industry: "Banking"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      position: "Operations Manager",
      company: "Industrial Manufacturing",
      content: "From worker safety to equipment monitoring, ZeexAI provides comprehensive coverage. The predictive maintenance alerts have saved us thousands in repair costs.",
      rating: 5,
      avatar: "👩‍🔬",
      industry: "Industrial"
    },
    {
      id: 4,
      name: "James Kim",
      position: "City Security Commissioner",
      company: "Smart City Initiative",
      content: "Implementing ZeexAI across our urban infrastructure has dramatically improved public safety while optimizing resource allocation through intelligent analytics.",
      rating: 5,
      avatar: "👨‍⚖️",
      industry: "Government"
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className={`section-title ${isVisible ? 'animate-in' : ''}`}>
            Trusted by Industry Leaders
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-in' : ''}`}>
            See what our clients say about their experience with ZeexAI security solutions
          </p>
        </div>

        <div className="testimonials-content">
          <div className="testimonial-track">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card ${index === activeTestimonial ? 'active' : ''} ${
                  isVisible ? 'animate-in' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="card-content1">
                  <div className="quote-mark">"</div>
                  
                  <div className="testimonial-text">
                    <p>{testimonial.content}</p>
                  </div>

                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>

                  <div className="author-info">
                    <div className="avatar">{testimonial.avatar}</div>
                    <div className="author-details">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-position">{testimonial.position}</p>
                      <p className="author-company">{testimonial.company}</p>
                      <div className="industry-tag">{testimonial.industry}</div>
                    </div>
                  </div>
                </div>

                <div 
                  className="card-background"
                  style={{ 
                    background: `linear-gradient(135deg, 
                      ${index % 2 === 0 ? '#667eea' : '#f093fb'} 0%, 
                      ${index % 2 === 0 ? '#764ba2' : '#f5576c'} 100%)` 
                  }}
                ></div>
              </div>
            ))}
          </div>

          <div className="testimonial-controls">
            <button className="control-btn prev" onClick={prevTestimonial}>
              <span>←</span>
            </button>
            
            <div className="pagination">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`pagination-dot ${index === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                ></button>
              ))}
            </div>

            <button className="control-btn next" onClick={nextTestimonial}>
              <span>→</span>
            </button>
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Enterprise Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1M+</div>
              <div className="stat-label">Threats Prevented</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;