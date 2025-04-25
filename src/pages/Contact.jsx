import React from "react";
import {
  Person,
  Envelope,
  Telephone,
  PencilSquare,
  ChatDots
} from "react-bootstrap-icons";


const Contact = () => {
  return (
    <section className="contact-section py-5">
      <div className="container">
        <h1 className="mb-5 fw-bold text-white fs-1">
          Contact<span className="text-warning fs-1"> Us</span>
        </h1>
        <p className=" text-light mb-5">
          Have questions or need assistance? Reach out and we'll respond
          promptly.
        </p>

        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-lg-6 animate__animated animate__fadeInUp">
            <div className="cardcontact bg-primary opacity-75 d-flex justify-content-center ">
              <h4 className="fw-bold ">Join LawForLayman Today!</h4>
            </div>
          </div>

          {/* Contact Info and Map */}
          <div className="col-lg-6 mx-auto">
            <div
              className="card p-5 shadow-lg border-0"
              style={{
                background: "rgba(13, 110, 253, 0.75)",
                backdropFilter: "blur(10px)",
                borderRadius: "1rem"
              }}
            >
              <h3 className="fw-bold mb-4 text-white text-center">
                Send Us a <span className="text-warning">Message</span>
              </h3>
              <form className="w-100">
                {/* Full Name */}
                <div className="mb-3 input-group w-100">
                  <span className="input-group-text bg-white text-primary fs-5 border-end-0">
                    <Person />
                  </span>
                  <input
                    type="text"
                    className="form-control border-start-0"
                    placeholder="Full Name"
                  />
                </div>

                {/* Email */}
                <div className="mb-3 input-group w-100">
                  <span className="input-group-text bg-white text-primary fs-5 border-end-0">
                    <Envelope />
                  </span>
                  <input
                    type="email"
                    className="form-control border-start-0"
                    placeholder="Email Address"
                  />
                </div>

                {/* Phone */}
                <div className="mb-3 input-group w-100">
                  <span className="input-group-text bg-white text-primary fs-5 border-end-0">
                    <Telephone />
                  </span>
                  <input
                    type="text"
                    className="form-control border-start-0"
                    placeholder="Phone Number"
                  />
                </div>

                {/* Subject */}
                <div className="mb-3 input-group w-100">
                  <span className="input-group-text bg-white text-primary fs-5 border-end-0">
                    <PencilSquare />
                  </span>
                  <input
                    type="text"
                    className="form-control border-start-0"
                    placeholder="Subject"
                  />
                </div>

                {/* Message */}
                <div className="mb-4 input-group w-100">
                  <span className="input-group-text bg-white text-primary fs-5 border-end-0">
                    <ChatDots />
                  </span>
                  <textarea
                    className="form-control border-start-0"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button className="btn btn-warning w-100 fw-bold py-3 fs-5 shadow-sm">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-3">
          <div className="col-lg-6 animate__animated animate__fadeInUp">
            <div className="card p-4 mb-4 shadow text-left  bg-white bg-opacity-25">
              <h5 className="fw-bold mb-3 text-black fs-1">
                Contact <span className="text-warning">Information</span>
              </h5>
              <p className="text-black ">
                <strong>📍 Address:</strong> Kakkanji St, Chennai, Tamil Nadu,
                India
              </p>
              <p className="text-black ">
                <strong>📞 Phone:</strong> +91 9083522638
              </p>
              <p className="text-black ">
                <strong>📧 Email:</strong> info@lawforlaymen.com
              </p>
              <p className="text-black  ">
                <strong>⏰ Business Hours:</strong>
              </p>
              <span className="text-black  fw-bold  ">Monday - Friday:</span>
              9:00 AM - 6:00 PM
              <span className=" text-black fw-bold">Saturday: </span> 9:00 AM -
              1:00 PM
              <span className=" fw-bold text-black">Sunday:</span>Closed
            </div>
          </div>
          <div className="col-lg-6 animate__animated animate__fadeInUp">
            <div
              className="card shadow overflow-hidden  opacity-75"
              style={{ height: "300px" }}
            >
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0641820071847!2d80.22599871484973!3d13.056888516812322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526606108fb727%3A0x51222b32650de6f3!2sKakkanji%20St%2C%20Choolai%2C%20Chennai%2C%20Tamil%20Nadu%20600007!5e0!3m2!1sen!2sin!4v1680513591642!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
