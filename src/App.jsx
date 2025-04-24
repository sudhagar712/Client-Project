import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home';
import Services from './pages/Services';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowitsWorks';

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<HowItWorks />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
