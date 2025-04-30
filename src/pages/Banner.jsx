import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Typewriter } from "react-simple-typewriter";
import bannerBg from "../assets/images/aigif.gif";

const Banner = () => {
  const bannerStyle = {
    position: "relative",
    backgroundColor: "#002b5c",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    backgroundImage: `linear-gradient( #012b5c,rgba(1, 43, 92, 0.33)), url(${bannerBg})`,
    backgroundSize: "cover",

    backgroundRepeat: "no-repeat",
    zIndex: 1
  };

  return (
    <div style={bannerStyle} className="py-5 ">
      <div className="container-fluid p-5 ">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-md-5 text-white text-center text-md-start mb-4 mb-md-0">
            <h1 className="fw-bold" style={{ fontSize: "2.8rem" }}>
              <Typewriter
                words={[ "Legal Assistance Made Simple",
                  "Expert Legal Guidance",
                  "Connect with Lawyers",
                  "Resolve Legal Issues",
                  "Professional Legal Support",]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
            <p className="lead mt-3">
              Connecting clients with lawyers through a digital platform. Get
              expert legal advice and support when you need it most.
            </p>
            <div className="mt-4 d-flex flex-sm-row gap-3 justify-content-center justify-content-md-start">
              <Link
                to="/client/register"
                className="btn fw-bold text-decoration-none"
                style={{
                  backgroundColor: "#ffc107",
                  color: "#000",
                  padding: "0.5rem 1.5rem",
                }}
              >
                Find a Lawyer
              </Link>
              <button
                className="btn btn-light fw-bold"
                style={{ padding: "0.5rem 1.5rem" }}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-7 text-center">
            <img
              src={logo}
              alt="LawForLayman Logo"
              className="img-fluid mt-5 opacity-25"
              data-aos="zoom-in-up"
              style={{ maxWidth: "65%", height: "auto", borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
