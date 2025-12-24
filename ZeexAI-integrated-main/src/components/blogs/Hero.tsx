
import logo from "../../assets/images/logo.png";

export default function Hero() {
  return (
    <section className="hero1">
      <div className="hero-inner">
        <img src={logo} className="hero-logo" alt="Zeex AI Logo" />
        <div className="hero-text">
          <h1>ZeexAI Blogs</h1>
          <p className="hero-caption">
            Stay updated with the latest in AI security technology,
            <br />
            industry trends and expert perspectives from the ZeexAI team.
          </p>
        </div>
      </div>
    </section>
  );
}