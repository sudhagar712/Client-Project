import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo.png";


const WhyCustomersLoveUs = () => {
  return (
    <div className="why-customers-love-us py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="position-relative text-center mb-4 mb-md-0">
            <div className="circle-container mx-auto">
              <img src={logo} alt="logo" className="main-logo" />

              <div className="circle-point top">
                <div className="stat-box">
                  5,00,000+
                  <br />
                  Businesses
                </div>
              </div>
              <div className="circle-point left">
                <div className="stat-box">
                  500+
                  <br />
                  Professionals
                </div>
              </div>
              <div className="circle-point bottom-left">
                <div className="stat-box">
                  1 lakh+
                  <br />
                  TM Registered
                </div>
              </div>
              <div className="circle-point bottom-right">
                <div className="stat-box">
                  1,00,000+
                  <br />
                  Company incorporated
                </div>
              </div>
            </div>
          </Col>

          <Col md={6} className="text-white ">
            <h3 className="fw-bold mb-5 mt-5 text-white">Why Do Customers Love Us?</h3>
            <div className="d-flex align-items-start mb-4">
              <div className="icon-box">&#8377;</div>
              <div>
                <h5 className="fw-bold mb-1">
                  Affordable Professional Services
                </h5>
                <p className="mb-0">
                  Proven legal and financial solutions with senior experts.
                </p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-4">
              <div className="icon-box">&#128196;</div>
              <div>
                <h5 className="fw-bold mb-1">Diverse Expert Network</h5>
                <p className="mb-0">
                  Talk to lawyers, CAs, and CSs to meet your legal and financial
                  needs.
                </p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-4">
              <div className="icon-box">&#129518;</div>
              <div>
                <h5 className="fw-bold mb-1">Easy-to-use dashboard</h5>
                <p className="mb-0">
                  Streamlined navigation for service requests and tracking.
                </p>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <div className="icon-box">&#128222;</div>
              <div>
                <h5 className="fw-bold mb-1">Quick Customer Support</h5>
                <p className="mb-0">Queries are responded within 24 hours*</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyCustomersLoveUs;
