import React from "react";

const PhasesSection: React.FC = () => {
  const phases = [
    {
      icon: "https://img.icons8.com/ios-filled/100/00d4ff/city-buildings.png",
      title: "Discovery Audit",
      description: "Analyze current setup and define surveillance goals.",
      number: "PHASE 01",
    },
    {
      icon: "https://img.icons8.com/ios-filled/100/00d4ff/monitor.png",
      title: "Solution Architecture",
      description: "Design a tailored, AI-ready surveillance blueprint.",
      number: "PHASE 02",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=23281&format=png&color=00d4ff",
      title: "Precision Deployment",
      description: "Hardware/software installation with zero downtime.",
      number: "PHASE 03",
    },
    {
      icon: "https://img.icons8.com/ios-filled/100/00d4ff/shield.png",
      title: "Validation Testing",
      description: "Test performance, accuracy, and system stability.",
      number: "PHASE 04",
    },
    {
      icon: "https://img.icons8.com/ios-filled/100/00d4ff/clock.png",
      title: "Ongoing Excellence",
      description: "24/7 monitoring, updates, and support.",
      number: "PHASE 05",
    },
  ];

  return (
    <section id="phases-section" className="phases-section">
      <h2 className="phase-title">Implementation Phases</h2>

      <div className="phase-container">
        {phases.map((phase, index) => (
          <div className="phase-card" key={index}>
            <div className="phase-icon">
              <img src={phase.icon} alt={phase.title} />
            </div>
            <h3>{phase.title}</h3>
            <p>{phase.description}</p>
            <span className="phase-number">{phase.number}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhasesSection;
