import React from 'react';
import SolutionsGrid from '../../components/solution/SolutionsGrid';
import Industries from '../../components/solution/Industries';
import TechDeepDive from '../../components/solution/TechDeepDive';
// import Testimonials from '../../components/solution/Testimonials';
import CTA from '../../components/solution/CTA';
import "../../assets/styles/home.css";
import "../../assets/styles/solution.css";

const Solution: React.FC = () => {
  return (
    <div className="App"> 
      <SolutionsGrid />
      <Industries />
      <TechDeepDive />
      {/* <Testimonials /> */}
      <CTA />
    </div>
  );
};

export default Solution;