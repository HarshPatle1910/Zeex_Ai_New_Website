import "../../assets/styles/about.css";
import "../../assets/styles/home.css";
import Hero from "../../components/about/Hero";
import MissionVision from "../../components/about/MissionVision";
// import Team from "../../components/about/Team";
// import Journey from "../../components/about/Journey";

const About = () => {
  return (
    <div className="antialiased">
      <Hero />
      <MissionVision />
      {/* <Team /> */}
      {/* <Journey /> */}
     
    </div>
  );
};

export default About;
