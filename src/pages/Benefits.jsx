import React from "react";
import { Cpu, FileText, Cloud, Mic } from "lucide-react"; 

const benefits = [
  {
    icon: <Cpu size={40} color="orange" />,
    title: "Draft Legal Documents with GenAI",
    description:
      "Reduce drafting time by 90%, allowing you to focus on client needs."
  },
  {
    icon: <FileText size={40} color="green" />,
    title: "Instant Research on Acts and Judgments",
    description: "Cutting down research time by 90%."
  },
  {
    icon: <Cloud size={40} color="yellow" />,
    title: "Seamless History Storage",
    description:
      "Our secure storage keeps your research history easily accessible."
  },
  {
    icon: <Mic size={40} color="red" />,
    title: "Voice Command for Quick Searches",
    description:
      "Use voice commands to quickly find relevant case acts or judgments."
  }
];

const Benefits = () => {
  return (
    <section
      className="py-5"
      style={{
        background: "#fff3cd",
        backgroundImage: "url('/path-to-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container-fluid ">
        <hr />
        <h1 className="display-1  mt-3 fw-bold mb-5 ">
          What <span className="text-warning">Benefits</span>
        </h1>
        <div className="row g-4 justify-content-center">
          {benefits.map((benefit, idx) => (
            <div className="col-12 col-sm-6 col-lg-3" key={idx}>
              <div
                className="p-4 rounded-4 h-100"
                style={{
                  backgroundColor: "#012b5c",
                  color: "white",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center bg-dark rounded-circle mb-3 mx-auto"
                  style={{ width: "70px", height: "70px" }}
                >
                  {benefit.icon}
                </div>
                <h5 className="fw-bold mb-3 mt-3 text-center">{benefit.title}</h5>
                <p className="mt-2 text-center">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
