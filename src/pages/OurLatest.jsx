import React from "react";
import patentImg from "../assets/images/gst2.png";
import gstImg from "../assets/images/gst1.png";

const articles = [
  {
    image: patentImg,
    title: "6 Types of Patent Searches in India – A Complete Guide",
    description:
      "A patent search is a systematic examination of patents and published work to determine the novelty of an invention.",
    link: "#"
  },
  {
    image: gstImg,
    title: "How to File a GST Complaint Online: Step-by-Step Guide",
    description:
      "Filing GST complaints and grievances online is a straightforward process designed to help taxpayers quickly resolve issues.",
    link: "#"
  }
];

const OurLatest = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#fff3cd" }}>
      <div className="container">
        <hr />
        <h1 className="display-4 fw-bold text-center mb-5">
          Our Latest <span className="text-warning">Articles</span>
        </h1>
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
              <div
                className="h-100 p-4 text-white rounded shadow"
                style={{ backgroundColor: "#012b5c" }}
              >
                <div className="overflow-hidden rounded">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="img-fluid w-100 transition"
                    style={{
                      transition: "transform 0.3s ease",
                      borderRadius: "10px"
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                </div>
                <h5 className="fw-bold mt-3">{article.title}</h5>
                <p className="text-warning">{article.description}</p>
                <a
                  href={article.link}
                  className="btn btn-warning text-dark fw-semibold mt-auto"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLatest;
