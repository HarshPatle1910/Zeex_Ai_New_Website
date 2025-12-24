import "../../assets/styles/home.css";
import "../../assets/styles/privacy.css";
import TermsOfService from "../../components/terms/TermsOfService";
import SectionHeader from "../../components/common/SectionHeader";
const Privacy = () => {
  return (
    <>
      {/* SECTION HEADER 3 */}
      <SectionHeader
        
        word1="Terms of "
        word2=" Services"
        description="Last updated: April 30, 2025"
      />
      <TermsOfService />
    </>
  );
};

export default Privacy;
