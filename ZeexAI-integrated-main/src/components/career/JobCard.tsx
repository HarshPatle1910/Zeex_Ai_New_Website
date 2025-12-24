import { motion } from 'framer-motion';
import { Briefcase, MapPin, Users, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import type { Role } from '../../data/roles';


interface JobCardProps {
  role: Role;
  index: number;
  onApply: (role: Role) => void;
}

export default function JobCard({ role, index, onApply }: JobCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="job-card"
    >
      <motion.div
        animate={isHovered ? { y: -8, scale: 1.02 } : { y: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="job-card-content"
      >
        <div className="job-card-gradient-bg" />

        <motion.div
          animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="job-card-top-border"
        />

        <div className="job-card-inner">
          <h3 className="job-card-title">
            {role.title}
          </h3>

          <div className="job-card-badges">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="job-badge"
            >
              <Briefcase size={12} />
              {role.type}
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="job-badge"
            >
              <MapPin size={12} />
              {role.location}
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="job-badge"
            >
              <Users size={12} />
              {role.eligibility}
            </motion.span>
          </div>

          <p className="job-card-description">
            {role.description}
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onApply(role)}
            className="job-card-button"
          >
            <div className="job-button-shine" />
            <span className="job-button-text">
              Apply Now
              <motion.span
                animate={isHovered ? { x: 5 } : { x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </span>
          </motion.button>
        </div>
      </motion.div>

      <div className="job-card-glow-bg" />
    </motion.div>
  );
}