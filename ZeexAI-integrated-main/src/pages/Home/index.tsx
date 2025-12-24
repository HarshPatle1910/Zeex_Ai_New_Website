import "../../assets/styles/home.css";
import React from "react";
import HeroSection from "../../components/home/HeroSection";
import SectionHeader from "../../components/common/SectionHeader";
import FeaturesDark from "../../components/home/FeaturesDark";
import ExploreFeatures from "../../components/home/ExploreFeatures";
import VerticalSlider from "../../components/home/VerticalSlider";
import ServicesButton from "../../components/home/ServicesButton";
import PhasesSection from "../../components/home/PhasesSection";
import CtaSection from "../../components/common/CtaSection";
import BlogSection from "../../components/home/BlogSection";
import PartnerLogos from "../../components/home/PartnerLogos";
import ViewBlogs from "../../components/home/ViewBlogs";


const HomePage: React.FC = () => {
  return (
    <>

      {/* HERO SECTION */}
      <HeroSection />

      {/* SECTION HEADER 1 */}
      <SectionHeader
        title="Transforming Safety & Workflows with AI + Data"
        word1="CORE"
        word2="FEATURES"
        description="Zeex AI bridges safety and efficiency, delivering predictive insights 
            that secure environments and streamline operations."
      />
      {/* FEATURES DARK SECTION */}
      <FeaturesDark />
      {/* EXPLORE BUTTON */}
      <ExploreFeatures />
      {/* SECTION HEADER 2 */}
      <SectionHeader
        title="Industry Services"
        word1="AI Security for"
        word2="Every Environment"
        description="Transforming workplaces and cities with intelligent safety and management powered by AI and data."
      />
      {/* Vertical Slider */}
      <VerticalSlider />
      {/* SERVICES BUTTON */}
      <ServicesButton />
      {/* SECTION HEADER 3 */}
      <SectionHeader
        title="Our Methodology"
        word1="Precision"
        word2="Implementation"
        word3="Process"
        description="A meticulously crafted 5-phase approach ensuring flawless integration of our AI surveillance solutions."
      />
      {/* PHASES SECTION */}
      <PhasesSection />
      {/* CTA SECTION */} 
      <CtaSection 
        title="Ready to Enhance Your Security?"
        description="Our team is ready to help you implement the perfect security solution for your needs."
        buttonText="Request a Consultation"
        buttonLink="/contact"
      />
      {/* Blogs SECTION*/}
      <BlogSection />
      {/* View Blogs SECTION*/}
      <ViewBlogs />
      
      {/* SECTION HEADER 3 */}
      <SectionHeader
        title="Trusted Partnerships"
        word1="Supported by "
        word2="Industry Leaders"
        description="Our technology is recognized and supported by premier institutions and industry leaders."
      />
      {/* PartnerLogos  */}
      <PartnerLogos />
      

    </>
  );
};

export default HomePage;

