import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const duties = [
  {
    title: "Legal Representation",
    description:
      "Lawyers provide legal representation and advocacy for their clients, whether individuals or organisations, in various legal matters."
  },
  {
    title: "Research and Analysis",
    description:
      "Lawyers conduct extensive research and analysis of legal cases and statutes to build strong arguments and strategies for their clients."
  },
  {
    title: "Negotiation and Mediation",
    description:
      "Lawyers engage in negotiations with opposing parties to reach settlements or mediate disputes to resolve conflicts outside of the courtroom."
  },
  {
    title: "Client Counselling",
    description:
      "Lawyers provide ongoing counsel to their clients, keeping them informed about the progress of their case and advising them on the best course of action."
  },
  {
    title: "Legal Advice",
    description:
      "Lawyers offer expert legal advice to clients on specific legal issues, helping them understand their rights and obligations."
  },
  {
    title: "Drafting Legal Documents",
    description:
      "Lawyers prepare and review legal documents such as contracts, wills, pleadings, and other legal agreements."
  },
  {
    title: "Courtroom Representation",
    description:
      "Lawyers represent clients in court proceedings, presenting evidence, examining witnesses, and making oral arguments before judges and juries."
  },
  {
    title: "Maintain Confidentiality",
    description:
      "Lawyers must uphold high ethical standards, ensuring confidentiality and loyalty to their clients while maintaining integrity and professionalism in their practice."
  }
];

const LawyerDuties = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-5" style={{backgroundColor:"#fff3cd"}}>
      <div className="container">
        <h1 className="display-1 container fw-bold mb-5 ">
          Duties of <span className="text-warning">Lawyers</span>
        </h1>
        <div className="row">
          {duties.map((duty, idx) => (
            <div
              key={idx}
              className="col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="d-flex mb-3 align-items-start">
                <i className="bi bi-check2-circle text-primary me-2 fs-4"></i>
                <div>
                  <h6 className="fw-bold">{duty.title}:</h6>
                  <p className="text-muted mb-0">{duty.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LawyerDuties;
