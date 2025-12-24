
import demo from "../../assets/images/about.png";

export default function MissionVision() {
  return (
    <section id="mission" className="section reveal">
      <div className="text-block">
        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="text-muted">
          To empower organizations with intelligent surveillance and automation by transforming ordinary CCTV systems into proactive guardians. We deliver real-time insights, predictive alerts, and seamless integration, ensuring safer environments and smarter operations across industries.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-3">Our Vision</h2>
        <p className="text-muted">
          To pioneer a future where AI-driven vision systems redefine security, efficiency, and trust worldwide. Our goal is to become the global standard for intelligent monitoring — blending innovation, ethics, and accessibility to create technology that protects and empowers communities.
        </p>
      </div>

      <div className="image-block">
        <img
          src={demo}
          alt="Zeex AI Surveillance Demo"
        />
      </div>
    </section>
  );
}
