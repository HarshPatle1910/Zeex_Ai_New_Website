import "../../assets/styles/home.css";
import "../../assets/styles/privacy.css";
import PrivacyPolicy from "../../components/Privacy/PrivacyPolicy";
import SectionHeader from "../../components/common/SectionHeader";
const Privacy = () => {
  return (
    <>
      {/* SECTION HEADER 3 */}
      <SectionHeader
        
        word1="PRIVACY  "
        word2="POLICY"
        description="Last updated: April 30, 2025"
      />
      <PrivacyPolicy />
    </>
  );
};

export default Privacy;
