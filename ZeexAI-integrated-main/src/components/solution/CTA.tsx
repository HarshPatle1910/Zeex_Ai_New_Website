// CTA.tsx
import React, { useState } from 'react';
import { API_ENDPOINTS } from '../../config/api';

const CTA: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setIsSubmitting(true);
    
    try {
      const response = await fetch(API_ENDPOINTS.DEMO_REQUEST, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
        }),
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          errorData = { error: `Server error: ${response.status} ${response.statusText}` };
        }
        const errorMessage = errorData.error || errorData.message || `Failed to submit demo request (${response.status}). Please try again.`;
        setError(errorMessage);
        return;
      }

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        setEmail('');
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        setError(data.error || data.message || 'Failed to submit demo request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting demo request:', error);
      let errorMessage = 'Network error. ';
      
      if (error instanceof TypeError && error.message.includes('fetch')) {
        errorMessage += 'Cannot connect to the server. Please make sure the backend is running on http://127.0.0.1:8000';
      } else if (error instanceof Error) {
        errorMessage += error.message;
      } else {
        errorMessage += 'Please check your connection and try again.';
      }
      
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
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
              {error && (
                <div className="error-message" style={{ 
                  color: '#ef4444', 
                  fontSize: '0.9rem', 
                  marginBottom: '1rem',
                  padding: '0.75rem',
                  background: 'rgba(239, 68, 68, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(239, 68, 68, 0.3)'
                }}>
                  {error}
                </div>
              )}
              
              {success && (
                <div className="success-message" style={{ 
                  color: '#10b981', 
                  fontSize: '0.9rem', 
                  marginBottom: '1rem',
                  padding: '0.75rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(16, 185, 129, 0.3)'
                }}>
                  Demo request submitted successfully! We will contact you shortly.
                </div>
              )}
              
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
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