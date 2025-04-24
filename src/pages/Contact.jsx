import React from "react";


const Contact = () => {
  return (
    <section className="contact-section py-5">
      <div className="container">
        <h1 className="mb-5 fw-bold text-white fs-1" >
          Contact<span className="text-warning fs-1"> Us</span>
        </h1>
        <p className=" text-light mb-5">
          Have questions or need assistance? Reach out and we'll respond
          promptly.
        </p>

        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-lg-6">
            <div className="cardcontact d-flex justify-content-center align-items-center">
              <h1 className="text-center">Join <br /> LawForLayman <br />Today!</h1>
            </div>
          </div>

          {/* Contact Info and Map */}
          <div className="col-lg-6">
            <div className="card p-4 shadow bg-white bg-opacity-75">
              <h5 className="fw-bold mb-4">Send Us a Message</h5>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button className="btn btn-warning ">Send Message</button>
              </form>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-3">
          <div className="col-lg-6">
            <div className="card p-4 mb-4 shadow bg-white bg-opacity-75">
              <h5 className="fw-bold mb-3">Contact Information</h5>
              <p>
                <strong>📍 Address:</strong> Kakkanji St, Chennai, Tamil Nadu,
                India
              </p>
              <p>
                <strong>📞 Phone:</strong> +91 9083522638
              </p>
              <p>
                <strong>📧 Email:</strong> info@lawforlaymen.com
              </p>
              <p>
                <strong>⏰ Business Hours:</strong>
                <br />
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 1:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div
              className="card shadow overflow-hidden"
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
