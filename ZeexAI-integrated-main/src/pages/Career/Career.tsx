import { motion } from 'framer-motion';
import { useState } from 'react';
import JobCard from '../../components/career/JobCard';
import ApplyModal from '../../components/career/ApplyModel';
import BackgroundBubbles from '../../components/career/BackgroundBubbles';
import  { roles } from '../../data/roles';
import type { Role } from '../../data/roles';
import { Sparkles } from 'lucide-react';
import '../../assets/styles/career.css'


export default function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const handleApply = (role: Role) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  return (
    <div className="page-container">
      <BackgroundBubbles />

      <div className="background-blobs">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="blob blob-1"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="blob blob-2"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="blob blob-3"
        />
      </div>

      <div className="page-content">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hero-section"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-inner"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="hero-badge"
            >
              <Sparkles size={16} className="badge-icon" />
              <span className="badge-text">Join Our Team</span>
            </motion.div>

            <h1 className="hero-title">
              Open Roles at Zeex AI
            </h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hero-subtitle"
            >
              Find your next opportunity and grow with us.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hero-glow"
          />
        </motion.section>

        <section className="jobs-section">
          <div className="jobs-grid-desktop">
            {roles.map((role, index) => (
              <JobCard
                key={role.id}
                role={role}
                index={index}
                onApply={handleApply}
              />
            ))}
          </div>

          <div className="jobs-grid-tablet">
            {roles.map((role, index) => (
              <JobCard
                key={role.id}
                role={role}
                index={index}
                onApply={handleApply}
              />
            ))}
          </div>

          <div className="jobs-grid-mobile">
            {roles.map((role, index) => (
              <div key={role.id} className="job-card-mobile">
                <JobCard
                  role={role}
                  index={index}
                  onApply={handleApply}
                />
              </div>
            ))}
          </div>
        </section>

        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="page-footer"
        >
          <div className="footer-content">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="footer-text"
            >
              © 2024 Zeex AI. Building the future of artificial intelligence.
            </motion.p>
          </div>
        </motion.footer>
      </div>

      <ApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        role={selectedRole}
      />
    </div>
  );
}