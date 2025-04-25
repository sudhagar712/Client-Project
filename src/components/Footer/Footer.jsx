import React from "react";


const Footer = () => {
  return (
    <footer className="footer  text-light pt-5 pb-3">
        <hr />
      <div className="container p-5">
        
        <div className="row gy-4">
          <div className="col-12 col-md-3">
            <h5 className="fw-bold">LawForLayman</h5>
            <p>Making legal services accessible to everyone.</p>
          </div>

          <div className="col-6 col-md-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/service" className="text-light text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3">
            <h6 className="fw-bold">Legal</h6>
            <ul className="list-unstyled">
              <li>
                <a href="#terms" className="text-light text-decoration-none">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-light text-decoration-none">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            <h6 className="fw-bold">Contact Us</h6>
            <address className="mb-0">
              Kakkanji St, Chennai, Tamil Nadu, India
              <br />
              <a
                href="tel:+919963522638"
                className="text-light text-decoration-none"
              >
                +91 9963522638
              </a>
              <br />
              <a
                href="mailto:info@lawforlaymen.com"
                className="text-light text-decoration-none"
              >
                info@lawforlaymen.com
              </a>
            </address>
          </div>
        </div>

        <hr className="my-4 border-light opacity-25" />
        <div className="text-center small">
          © 2025 LawForLayman. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
