import React from 'react'
import Banner from '../Banner'
import Services from '../Services';
import RealProblems from '../RealProblems';
import AllInOnePlatform from '../AllinOnePlatform';
import WhyCustomersLoveUs from '../WhyCustomersLoveUs';
import Contact from '../Contact';
import Benefits from '../Benefits';
import HowItWorks from '../HowitsWorks';
import ResultsExpected from '../ResultsExpected';
import OurLatest from '../OurLatest';
import ReviewsSection from '../ReviewsSection';
import LawyerDuties from '../LawyerDuties';
import FAQSection from './FAQComponent';

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <AllInOnePlatform/>
      <HowItWorks/>
      <LawyerDuties/>
      <RealProblems />
      <Benefits/>
      <ResultsExpected/>
      <OurLatest/>
      <WhyCustomersLoveUs/>
      <ReviewsSection />
      <FAQSection/>
      <Contact/>
    </div>
  );
}

export default Home
