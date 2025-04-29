import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

const faqs = [
  {
    question: "What is online lawyer consultation?",
    answer:
      "Online lawyer consultation allows individuals and businesses to seek legal advice remotely through video calls, phone calls, or chat. It provides quick and convenient access to legal experts for matters such as contracts, disputes, tax issues, and compliance."
  },
  {
    question: "What kinds of questions can I ask?",
    answer:
      "You can ask about contracts, disputes, legal rights, employment issues, etc."
  },
  {
    question: "How can I keep my identity private while asking questions?",
    answer:
      "You can choose anonymous consultation or avoid sharing personal details."
  },
  {
    question: "When can I expect a reply to my question?",
    answer:
      "Replies usually come within 24-48 hours depending on the complexity."
  },
  {
    question: "How can I find out if someone answered my question?",
    answer: "You’ll receive a notification via email or dashboard update."
  },
  {
    question: "How experienced are the lawyers who will give Consultation?",
    answer: "They are certified professionals with several years of experience."
  },
  {
    question: "If I call again, can I consult with the same lawyer?",
    answer: "Yes, if the lawyer is available, you can request a repeat session."
  },
  {
    question: "Can I pick the lawyer I want to consult?",
    answer: "Yes, based on availability and expertise."
  },
  {
    question: "Is there any reason to look for an online lawyer consultation?",
    answer:
      "It's convenient, time-saving, and allows access to wider expertise."
  },
  {
    question: "When should you hire a labor lawyer?",
    answer:
      "When facing employment disputes, wrongful termination, or wage issues."
  }
];

const FAQSection = () => {
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 5, faqs.length));
  };

  const handleViewLess = () => {
    setVisibleCount((prev) => Math.max(prev - 5, 5));
  };

  return (
    <div
      className="container-fluid py-5"
      data-aos="fade-up"
      style={{ backgroundColor: "#012b5c" }}
    >
      <h2 className="text-center fw-bold mb-3 fs-1 text-white">
        FAQs on Online <span className="text-warning">Lawyer Consultation</span>
      </h2>
      <p
        className="text-center text-warning mb-4 mx-auto"
        style={{ maxWidth: "700px" }}
      >
        Explore answers to common questions about online legal consultations,
        including privacy options, lawyer expertise, consultation languages, and
        follow-up procedures to ensure a secure and informed experience.
      </p>

      <div
        className="accordion p-3"
        id="faqAccordion"
        style={{ backgroundColor: "#fff3cd" }}
      >
        {faqs.slice(0, visibleCount).map((faq, index) => (
          <div
            className="accordion-item"
            style={{ backgroundColor: "#fff3cd" }}
            key={index}
          >
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-4">
        {visibleCount < faqs.length && (
          <button className="btn btn-light me-2" onClick={handleViewMore}>
            View More
          </button>
        )}
        {visibleCount > 5 && (
          <button className="btn btn-outline-light" onClick={handleViewLess}>
            View Less
          </button>
        )}
      </div>
    </div>
  );
};

export default FAQSection;
