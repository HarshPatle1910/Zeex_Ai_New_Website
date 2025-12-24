import { Mail, MapPin, Phone, Navigation } from 'lucide-react';
import { useState } from 'react';
import type {FormEvent } from 'react';
import Toast from './Toast';
import { API_ENDPOINTS } from '../../config/api';


interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(API_ENDPOINTS.CONTACT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setShowToast(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setErrors({});
      } else {
        // Handle error response
        const errorMessage = data.error || 'Failed to send message. Please try again.';
        setErrors({ message: errorMessage });
        alert(errorMessage);
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      const errorMessage = 'Network error. Please check your connection and try again.';
      setErrors({ message: errorMessage });
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <div className="contact-container1">
      <div className="background-animations">
        <div className="float-orb orb-1"></div>
        <div className="float-orb orb-2"></div>
        <div className="float-orb orb-3"></div>

        <div className="floating-phone">
          <div className="phone-mockup">
            <div className="phone-inner">
              <Phone size={24} style={{ color: '#22d3ee', opacity: 0.5 }} />
            </div>
          </div>
        </div>

        <div className="floating-envelope">
          <div className="envelope-mockup">
            <Mail size={20} style={{ color: '#60a5fa', opacity: 0.5 }} />
          </div>
        </div>

        <div className="floating-map">
          <div className="map-mockup">
            <MapPin size={24} style={{ color: '#c084fc', opacity: 0.5 }} />
          </div>
        </div>
      </div>

      <div className="contact-wrapper">
        <div className="contact-header">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-left">
            <div className="contact-card">
              <div className="card-content">
                <div className="icon-wrapper">
                  <div className="icon-box">
                    <Mail size={24} style={{ color: '#22d3ee' }} />
                  </div>
                </div>
                <div>
                  <h3 className="card-title">Email</h3>
                  <a href="mailto:admin@zeexai.com" className="card-link">
                    admin@zeexai.com
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <div className="card-content">
                <div className="icon-wrapper">
                  <div className="icon-box">
                    <MapPin size={24} style={{ color: '#22d3ee' }} />
                  </div>
                </div>
                <div>
                  <h3 className="card-title">Location</h3>
                  <p className="card-text">Chennai, India</p>
                </div>
              </div>
            </div>

            <div className="cta-buttons">
              <a href="tel:+918709221636" className="cta-button button-call">
                <Phone size={20} />
                <span>Call Us</span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Nirmaan,+CFI,+IIT+Madras,+Chennai,+India+600036"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button button-visit"
              >
                <Navigation size={20} />
                <span>Visit Us</span>
              </a>
            </div>

            <div className="schedule-card">
              <h4 className="schedule-title">Schedule a Visit</h4>
              <p className="schedule-text">
                Nirmaan, CFI, IIT Madras
                <br />
                Chennai, India 600036
              </p>
            </div>
          </div>

          <div className="contact-right">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="error-text">{errors.name}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="error-text">{errors.email}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  placeholder="How can we help?"
                />
                {errors.subject && (
                  <p className="error-text">{errors.subject}</p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Tell us more about your inquiry..."
                />
                {errors.message && (
                  <p className="error-text">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {showToast && (
        <Toast
          message="Your message has been sent. Our team will reach out to you soon!"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}

export default ContactUs;