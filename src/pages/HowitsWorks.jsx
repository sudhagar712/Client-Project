import React from "react";
import { FileText, Search, ArrowRight } from "lucide-react"; 
import bgImage from "../assets/images/service.png"; 

const steps = [
  {
    icon: <FileText size={32} color="#fff" />,
    title: "Register Your Complaint",
    description:
      "Fill out our simple form with details about your legal concern"
  },
  {
    icon: <Search size={32} color="#fff" />,
    title: "Get Assigned a Lawyer",
    description:
      "We match you with a qualified lawyer based on your location and needs"
  },
  {
    icon: <ArrowRight size={32} color="#fff" />,
    title: "Resolve Your Issue",
    description:
      "Work with your assigned lawyer to address and resolve your legal matter"
  }
];

const HowItWorks = () => {
     const sectionStyle = {
        backgroundImage: `linear-gradient(#012b5c,rgba(1, 43, 92, 0.17)), url(${bgImage})`,
        backgroundSize: "fit",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white"
      };
  return (
    <section className="py-5 " style={sectionStyle}>
      <div className="container text-center">
        <h1 className="mb-5 fw-bold text-white fs-1">
          How is it<span className="text-warning fs-1"> Works</span>
        </h1>
        <div className="row justify-content-center">
          {steps.map((step, index) => (
            <div className="col-12 col-md-4 mb-4" key={index}>
              <div className="d-flex flex-column align-items-center px-3">
                <div
                  className="bg-primary rounded-circle d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  {step.icon}
                </div>
                <h5 className="fw-bold mb-2 text-dark text-center">
                  {index + 1}. {step.title}
                </h5>
                <p className="text-muted text-center">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
