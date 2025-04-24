import React from "react";
import { ArrowRight } from "lucide-react";
import bgImage from "../assets/images/service.png"; 

const services = [
  {
    title: "Legal Consultation",
    subtitle: "Get expert advice from qualified lawyers",
    description:
      "Our platform connects you with experienced legal professionals who can provide guidance on various legal matters."
  },
  {
    title: "Complaint Resolution",
    subtitle: "Fast and efficient resolution of your legal issues",
    description:
      "Register your complaint and get connected with a lawyer who specializes in your specific legal concern."
  },
  {
    title: "Document Preparation",
    subtitle: "Professional assistance with legal documentation",
    description:
      "Our lawyers can help you prepare and review legal documents to ensure they meet all requirements."
  }
];

const Services = () => {
  const sectionStyle = {
    backgroundImage: `linear-gradient(#012b5c,rgba(1, 43, 92, 0.17)), url(${bgImage})`,
    backgroundSize: "fit",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "white"
  };

  return (
    <section className="py-5" style={sectionStyle}>
      <div className="container text-center">
        <h1 className="mb-5 fw-bold fs-1">
          Our <span className="text-warning fs-1">Services</span>
        </h1>
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-12 col-md-6 col-lg-4 animate__animated animate__fadeInUp"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationDuration: "0.8s"
              }}
              key={index}
            >
              <div
                className="card h-100 shadow-lg border-0"
                style={{ borderRadius: "1rem", backgroundColor: "#ffffffdd" }}
              >
                <div className="card-body text-start">
                  <h3 className="card-title fw-bold fs-4 text-dark">
                    {service.title}
                  </h3>
                  <h6 className="text-primary mb-4 mt-3 fw-bold">
                    {service.subtitle}
                  </h6>
                  <p className="card-text text-muted">{service.description}</p>
                  <a
                    href="#"
                    className="text-decoration-none text-primary fw-semibold d-flex align-items-center"
                  >
                    Learn More
                    <ArrowRight className="ms-2" size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
