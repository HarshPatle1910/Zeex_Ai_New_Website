import "../../assets/styles/home.css";
import "../../assets/styles/services.css";
import SectionHeader from "../../components/common/SectionHeader";
import SectionHeader1 from "../../components/common/SectionHeader";
import ServicesCards from "../../components/services/ServicesCards";
import SecurityServices from "../../components/services/services";
import CtaSection from "../../components/common/CtaSection";
// index.tsx or App.tsx
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
  return (
    <>
        {/* SECTION HEADER 1 */}
        <SectionHeader
            title="AI Security Services"
            word1="Tailored"
            word2="Security"
            word3="Services"
            description="AI-powered surveillance systems designed specifically for your environment and security needs."
        />
        {/* Service cards */}
        <ServicesCards />
        {/* SECTION HEADER 1 */}
        <SectionHeader1            
            word1="Security Tailored to"
            word2="Your Environment"           
            description="Every security challenge is unique. Our AI-powered services are designed to adapt to specific environments and security needs."
        />
        {/* Service cards */}
        <SecurityServices />
        <CtaSection 
        title="Ready to Explore the Right Service?"
        description="Our team of security experts is ready to help you find the perfect AI surveillance service for your needs."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </>
  );
};

export default Services;

