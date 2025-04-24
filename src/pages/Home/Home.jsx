import React from 'react'
import Banner from '../Banner'
import Services from '../Services';
import RealProblems from '../RealProblems';
import AllInOnePlatform from '../AllinOnePlatform';
import WhyCustomersLoveUs from '../WhyCustomersLoveUs';
import Contact from '../Contact';
import Benefits from '../Benefits';
import HowItWorks from '../HowitsWorks';

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <AllInOnePlatform/>
      <HowItWorks/>
      <RealProblems />
      <Benefits/>
      <WhyCustomersLoveUs/>
      <Contact/>
    </div>
  );
}

export default Home
