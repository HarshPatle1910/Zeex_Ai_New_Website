import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import type { Role } from '../../data/roles';
import { API_ENDPOINTS } from '../../config/api';


interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  role: Role | null;
}

export default function ApplyModal({ isOpen, onClose, role }: ApplyModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '0',
  });
  const [uploadType, setUploadType] = useState<'resume' | 'coverLetter' | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate required fields
    if (!formData.fullName.trim()) {
      setSubmitError('Full name is required');
      return;
    }
    if (!formData.email.trim()) {
      setSubmitError('Email is required');
      return;
    }
    if (!formData.phone.trim()) {
      setSubmitError('Phone number is required');
      return;
    }
    if (!uploadedFile) {
      setSubmitError('Please upload a resume');
      return;
    }
    if (!role) {
      setSubmitError('Position is required');
      return;
    }

    setIsSubmitting(true);

    try {
      // Create FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('position', role.title);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('resume', uploadedFile);

      const response = await fetch(API_ENDPOINTS.APPLICATIONS, {
        method: 'POST',
        body: formDataToSend,
        // Don't set Content-Type header - browser will set it with boundary for FormData
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        // Reset form after 2 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          onClose();
          setFormData({ fullName: '', email: '', phone: '', experience: '0' });
          setUploadType(null);
          setUploadedFile(null);
          setSubmitError(null);
        }, 2000);
      } else {
        // Handle validation errors
        const errors = data.errors || {};
        const errorMessages = Object.values(errors).flat() as string[];
        const errorMessage = errorMessages[0] || data.message || 'Failed to submit application. Please try again.';
        setSubmitError(errorMessage);
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!role) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="modal-content"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="modal-top-border"
            />
            <motion.button
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="modal-close-btn"
            >
              <X size={24} />
            </motion.button>

            <div className="modal-body">
              {!isSubmitted ? (
                <>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="modal-header"
                  >
                    <h2 className="modal-title">
                      Apply for {role.title}
                    </h2>
                    <p className="modal-subtitle">
                      Fill out the form below and we'll get back to you soon.
                    </p>
                  </motion.div>

                  <form onSubmit={handleSubmit} className="modal-form">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="form-label">
                        Full Name *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="John Doe"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.35 }}
                    >
                      <label className="form-label">
                        Email ID *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="john@example.com"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <label className="form-label">
                        Phone Number *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="+91 98765 43210"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45 }}
                    >
                      <label className="form-label">
                        Position
                      </label>
                      <input
                        type="text"
                        value={role.title}
                        disabled
                        className="form-input-disabled"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="form-label">
                        Years of Experience *
                      </label>
                      <motion.select
                        whileFocus={{ scale: 1.01 }}
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        className="form-input form-select"
                      >
                        <option value="0">0 years</option>
                        <option value="1">1 year</option>
                        <option value="2">2 years</option>
                        <option value="3+">3+ years</option>
                      </motion.select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.55 }}
                    >
                      <label className="form-label">
                        Upload Document *
                      </label>
                      <div className="upload-checkboxes">
                        <motion.label
                          whileHover={{ scale: 1.05 }}
                          className="checkbox-label"
                        >
                          <motion.input
                            whileHover={{ scale: 1.2 }}
                            type="checkbox"
                            checked={uploadType === 'resume'}
                            onChange={() => setUploadType(uploadType === 'resume' ? null : 'resume')}
                            className="checkbox-input"
                          />
                          <span className="checkbox-text">Resume</span>
                        </motion.label>
                        <motion.label
                          whileHover={{ scale: 1.05 }}
                          className="checkbox-label"
                        >
                          <motion.input
                            whileHover={{ scale: 1.2 }}
                            type="checkbox"
                            checked={uploadType === 'coverLetter'}
                            onChange={() => setUploadType(uploadType === 'coverLetter' ? null : 'coverLetter')}
                            className="checkbox-input"
                          />
                          <span className="checkbox-text">Cover Letter</span>
                        </motion.label>
                      </div>

                      {uploadType && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: -10 }}
                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                          exit={{ opacity: 0, height: 0, y: -10 }}
                          className="file-upload-container"
                        >
                          <input
                            type="file"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                            required
                            className="hidden-file-input"
                            id="file-upload"
                          />
                          <motion.label
                            whileHover={{ borderColor: 'rgba(34, 211, 238, 0.8)', backgroundColor: 'rgba(34, 211, 238, 0.1)' }}
                            htmlFor="file-upload"
                            className="file-upload-label"
                          >
                            <motion.div
                              whileHover={{ rotate: 20, scale: 1.2 }}
                            >
                              <Upload size={20} className="upload-icon" />
                            </motion.div>
                            <span className="upload-text">
                              {uploadedFile
                                ? uploadedFile.name
                                : `Upload ${uploadType === 'resume' ? 'Resume' : 'Cover Letter'}`}
                            </span>
                          </motion.label>
                          {uploadedFile && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="upload-success"
                            >
                              <CheckCircle size={16} />
                              File uploaded successfully
                            </motion.p>
                          )}
                        </motion.div>
                      )}
                    </motion.div>

                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="error-message"
                        style={{
                          color: '#ef4444',
                          fontSize: '14px',
                          marginBottom: '10px',
                          padding: '8px',
                          backgroundColor: 'rgba(239, 68, 68, 0.1)',
                          borderRadius: '4px',
                        }}
                      >
                        {submitError}
                      </motion.div>
                    )}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="submit-button"
                      disabled={isSubmitting}
                    >
                      <div className="submit-button-shine" />
                      <span className="submit-button-text">
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </span>
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="success-container"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="success-icon-box"
                  >
                    <CheckCircle size={40} className="success-icon" />
                  </motion.div>
                  <h3 className="success-title">
                    Application Submitted!
                  </h3>
                  <p className="success-message">
                    Our team will get back to you soon.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}