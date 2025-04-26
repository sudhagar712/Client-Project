import React from "react";



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
          <div className="col-lg-8 animate__animated animate__fadeInUp">
            <div className="cardcontact bg-primary opacity-75 d-flex justify-content-center ">
              <h4 className="fw-bold ">Join LawForLayman Today!</h4>
            </div>

            <div className="card p-4 mb-4 mt-4 shadow  bg-primary bg-opacity-75">
              <h5 className="fw-bold mb-3 text-white fs-1">
                Contact <span className="text-warning">Information</span>
              </h5>

              <div className="row text-start text-white p-5">
                <div className="col-md-6 mb-4">
                  <div className="mb-3">
                    <h6 className="fw-bold text-warning">📍 Address</h6>
                    <p className="mb-0">
                      Kakkanji St,
                      <br />
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>
                  <div className="mb-3">
                    <h6 className="fw-bold text-warning">📞 Phone</h6>
                    <p className="mb-0">+91 9083522638</p>
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="mb-3">
                    <h6 className="fw-bold text-warning">📧 Email</h6>
                    <p className="mb-0">info@lawforlaymen.com</p>
                  </div>
                  <div className="mb-3">
                    <h6 className="fw-bold text-warning">⏰ Business Hours</h6>
                    <p className="mb-0">
                      <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                      <br />
                      <strong>Saturday:</strong> 9:00 AM - 1:00 PM
                      <br />
                      <strong>Sunday:</strong> Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info and Map */}
          <div className="col-lg-4 mx-auto">
            <div
              className="card  p-5 shadow-lg border-0"
              style={{
                background: "rgba(13, 110, 253, 0.75)",
                backdropFilter: "blur(10px)",
                borderRadius: "1rem"
              }}
            >
              <h2 className="fw-bolder mb-4 text-white text-center">
                Send Us a <span className="text-warning">Message</span>
              </h2>

              <div>
                <form>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter a name"
                  />
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Enter a email address"
                  />
                  <input
                    type="tel"
                    className="form-control mb-3"
                    placeholder="Enter a phone Number"
                  />
                  <textarea
                    name=""
                    className="form-control"
                    placeholder="Message here"
                    id=""
                  ></textarea>
                  <div>
                    <button className="w-100 btn btn-warning mt-3 fw-bold">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-3">
          <div className="col-lg-12 animate__animated animate__fadeInUp">
            <div
              className="card  shadow overflow-hidden  "
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
