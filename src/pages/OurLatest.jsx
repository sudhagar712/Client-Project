import React from "react";
import patentImg from "../assets/images/gst2.png"; 
import gstImg from "../assets/images/gst1.png"; 

const articles = [
  {
    image: patentImg,
    title: "6 Types of Patent Searches in India – A Complete Guide",
    description:
      "A patent search is a systematic examination of patents and published work …",
    link: "#"
  },
  {
    image: gstImg,
    title: "How to File a GST Complaint Online: Step-by-Step Guide",
    description:
      "Filing GST complaints and grievances online is a straightforward process designed to …",
    link: "#"
  }
];

const OurLatest = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <h1 className="display-1 container fw-bold mb-5 ">
          Our Latest <span className="text-warning">Articles</span>
        </h1>
        <div className="row">
          {articles.map((article, index) => (
            <div
              className="col-12 col-md-6 mb-4 d-flex flex-column"
              key={index}
            >
              <img
                src={article.image}
                alt={article.title}
                className="img-fluid rounded w-50"
              />
              <h5 className="fw-bold mt-3">{article.title}</h5>
              <p className="text-muted">{article.description}</p>
              <a href={article.link} className="fw-semibold text-primary">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLatest;
