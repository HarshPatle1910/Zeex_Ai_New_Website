// CTA.tsx
import React, { useState } from 'react';


const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Demo requested for:', email);
    setIsSubmitting(false);
    setEmail('');
    alert('Thank you! We will contact you shortly.');
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-text">
            <h2>Ready to Transform Your Security?</h2>
            <p>Join thousands of businesses already protecting their assets with ZeexAI's advanced security solutions</p>
            
            <div className="cta-stats">
              <div className="stat">
                <div className="stat-number">99.9%</div>
                <div className="stat-label">Uptime</div>
              </div>
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Monitoring</div>
              </div>
              <div className="stat">
                <div className="stat-number">50ms</div>
                <div className="stat-label">Response Time</div>
              </div>
            </div>
          </div>

          <div className="cta-form-container">
            <div className="form-header">
              <h3>Request a Demo</h3>
              <p>See how ZeexAI can protect your business</p>
            </div>
            
            <form className="cta-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="email-input"
                />
                <div className="input-decoration"></div>
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    Get Started
                    <div className="btn-shine"></div>
                  </>
                )}
              </button>
            </form>

            <div className="cta-features">
              <div className="feature">
                <div className="feature-icon">✓</div>
                <span>No credit card required</span>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <span>Free 30-day trial</span>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <span>Setup in minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="cta-background">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="pulse-ring"></div>
      </div>
    </section>
  );
};

export default CTA;