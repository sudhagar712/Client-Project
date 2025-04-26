import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.jpeg";
import bgImage from "../../../assets/images/pattern logo.jpg";

const LawyerRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    barCouncilNumber: "",
    yearsOfExperience: "",
    specialization: "",
    education: "",
    city: "",
    state: "",
    pincode: "",
    availability: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      navigate("/lawyer/registration-success");
    }, 1500);
  };

  return (
    <div
      className="min-vh-100 d-flex flex-column"
      style={{
        backgroundImage: `linear-gradient(rgba(1, 43, 92, 0.9), rgba(1, 43, 92, 0.7)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <main className="py-4 w-100">
        <Container fluid="lg" className="py-4">
          <Link
            to="/"
            className="d-flex align-items-center text-white fs-5 fw-medium text-decoration-none mb-4"
            style={{ transition: "all 0.3s ease" }}
          >
            <i className="bi bi-arrow-left me-2"></i>
            Back to Home
          </Link>

          <Card className="border-0 shadow-lg" style={{ borderRadius: "15px" }}>
            <Row className="g-0">
              {/* Left Side */}
              <Col
                md={5}
                className="d-flex flex-column align-items-center justify-content-center p-5 text-center"
                style={{
                  background: "linear-gradient(45deg, #012b5c, #1a4b8c)",
                  borderRadius: "15px 0 0 15px",
                }}
              >
                <img
                  src={logo}
                  alt="LawForLayman Logo"
                  className="mb-4"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  }}
                />
                <h2 className="text-white fw-bold mb-3">Welcome Lawyer!</h2>
                <p className="text-white-50">
                  Join our platform to offer your legal expertise and services
                </p>
              </Col>

              {/* Right Side */}
              <Col md={7} className="p-4 p-md-5">
                <div className="d-flex flex-column justify-content-center h-100">
                  <div className="text-center mb-4">
                    <img
                      src={logo}
                      alt="LawForLayman Logo"
                      className="mb-3"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                      }}
                    />
                    <h3 className="fs-2 fw-bold text-primary mb-2">
                      Lawyer Registration
                    </h3>
                    <p className="text-muted">
                      Fill out the form below to create your account
                    </p>
                  </div>

                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium text-muted">
                            First Name
                          </Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <i className="bi bi-person text-muted"></i>
                            </span>
                            <Form.Control
                              type="text"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleChange}
                              placeholder="First Name"
                              required
                              className="border-start-0"
                              style={{ height: "50px" }}
                            />
                          </div>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium text-muted">
                            Last Name
                          </Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <i className="bi bi-person text-muted"></i>
                            </span>
                            <Form.Control
                              type="text"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              placeholder="Last Name"
                              required
                              className="border-start-0"
                              style={{ height: "50px" }}
                            />
                          </div>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium text-muted">
                            Email
                          </Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <i className="bi bi-envelope text-muted"></i>
                            </span>
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Email"
                              required
                              className="border-start-0"
                              style={{ height: "50px" }}
                            />
                          </div>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium text-muted">
                            Phone
                          </Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <i className="bi bi-phone text-muted"></i>
                            </span>
                            <Form.Control
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Phone Number"
                              required
                              className="border-start-0"
                              style={{ height: "50px" }}
                            />
                          </div>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium text-muted">
                            Date of Birth
                          </Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <i className="bi bi-calendar text-muted"></i>
                            </span>
                            <Form.Control
                              type="date"
                              name="dob"
                              value={formData.dob}
                              onChange={handleChange}
                              required
                              className="border-start-0"
                              style={{ height: "50px" }}
                            />
                          </div>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium text-muted">
                            Gender
                          </Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <i className="bi bi-gender-ambiguous text-muted"></i>
                            </span>
                            <Form.Select
                              name="gender"
                              value={formData.gender}
                              onChange={handleChange}
                              required
                              className="border-start-0"
                              style={{ height: "50px" }}
                            >
                              <option value="">Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </Form.Select>
                          </div>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium text-muted">
                            Bar Council Number
                          </Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <i className="bi bi-file-earmark-text text-muted"></i>
                            </span>
                            <Form.Control
                              type="text"
                              name="barCouncilNumber"
                              value={formData.barCouncilNumber}
                              onChange={handleChange}
                              placeholder="Registration Number"
                              required
                              className="border-start-0"
                              style={{ height: "50px" }}
                            />
                          </div>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium text-muted">
                            Years of Experience
                          </Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <i className="bi bi-clock-history text-muted"></i>
                            </span>
                            <Form.Select
                              name="yearsOfExperience"
                              value={formData.yearsOfExperience}
                              onChange={handleChange}
                              required
                              className="border-start-0"
                              style={{ height: "50px" }}
                            >
                              <option value="">Select Experience</option>
                              <option value="0-2">0-2 years</option>
                              <option value="3-5">3-5 years</option>
                              <option value="6-10">6-10 years</option>
                              <option value="11-15">11-15 years</option>
                              <option value="15+">15+ years</option>
                            </Form.Select>
                          </div>
                        </Form.Group>
                      </Col>

                      <Col md={12}>
                        <Form.Group>
                          <Form.Label className="fw-medium text-muted">
                            Specialization
                          </Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <i className="bi bi-briefcase text-muted"></i>
                            </span>
                            <Form.Select
                              name="specialization"
                              value={formData.specialization}
                              onChange={handleChange}
                              required
                              className="border-start-0"
                              style={{ height: "50px" }}
                            >
                              <option value="">Select Specialization</option>
                              <option value="property">Property Law</option>
                              <option value="family">Family Law</option>
                              <option value="criminal">Criminal Law</option>
                              <option value="civil">Civil Law</option>
                              <option value="corporate">Corporate Law</option>
                              <option value="tax">Tax Law</option>
                              <option value="intellectual">
                                Intellectual Property
                              </option>
                              <option value="other">Other</option>
                            </Form.Select>
                          </div>
                        </Form.Group>
                      </Col>

                      <Col md={12}>
                        <Form.Group>
                          <Form.Label className="fw-medium text-muted">
                            Education
                          </Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <i className="bi bi-mortarboard text-muted"></i>
                            </span>
                            <Form.Control
                              as="textarea"
                              rows={2}
                              name="education"
                              value={formData.education}
                              onChange={handleChange}
                              placeholder="Educational Qualifications"
                              required
                              className="border-start-0"
                              style={{ height: "100px" }}
                            />
                          </div>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium text-muted">
                            City
                          </Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <i className="bi bi-geo-alt text-muted"></i>
                            </span>
                            <Form.Control
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              placeholder="City"
                              required
                              className="border-start-0"
                              style={{ height: "50px" }}
                            />
                          </div>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium text-muted">
                            State
                          </Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <i className="bi bi-geo-alt text-muted"></i>
                            </span>
                            <Form.Control
                              type="text"
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                              placeholder="State"
                              required
                              className="border-start-0"
                              style={{ height: "50px" }}
                            />
                          </div>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium text-muted">
                            Pincode
                          </Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <i className="bi bi-pin-map text-muted"></i>
                            </span>
                            <Form.Control
                              type="text"
                              name="pincode"
                              value={formData.pincode}
                              onChange={handleChange}
                              placeholder="Pincode"
                              required
                              className="border-start-0"
                              style={{ height: "50px" }}
                            />
                          </div>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium text-muted">
                            Availability
                          </Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <i className="bi bi-calendar-check text-muted"></i>
                            </span>
                            <Form.Select
                              name="availability"
                              value={formData.availability}
                              onChange={handleChange}
                              required
                              className="border-start-0"
                              style={{ height: "50px" }}
                            >
                              <option value="">Select Availability</option>
                              <option value="full-time">Full-time</option>
                              <option value="part-time">Part-time</option>
                              <option value="weekends">Weekends only</option>
                            </Form.Select>
                          </div>
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium text-muted">
                            Password
                          </Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <i className="bi bi-lock text-muted"></i>
                            </span>
                            <Form.Control
                              type="password"
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              required
                              className="border-start-0"
                              style={{ height: "50px" }}
                            />
                          </div>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label className="fw-medium text-muted">
                            Confirm Password
                          </Form.Label>
                          <div className="input-group">
                            <span className="input-group-text bg-light border-end-0">
                              <i className="bi bi-lock text-muted"></i>
                            </span>
                            <Form.Control
                              type="password"
                              name="confirmPassword"
                              value={formData.confirmPassword}
                              onChange={handleChange}
                              required
                              className="border-start-0"
                              style={{ height: "50px" }}
                            />
                          </div>
                        </Form.Group>
                      </Col>

                      <Col md={12} className="mt-4">
                        <Button
                          type="submit"
                          className="w-100 py-3"
                          disabled={loading}
                          style={{
                            background:
                              "linear-gradient(45deg, #012b5c, #1a4b8c)",
                            border: "none",
                            borderRadius: "10px",
                            fontSize: "1.1rem",
                          }}
                        >
                          {loading ? (
                            <>
                              <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                              ></span>
                              Processing...
                            </>
                          ) : (
                            <>
                              <i className="bi bi-person-plus me-2"></i>
                              Register Now
                            </>
                          )}
                        </Button>
                      </Col>
                    </Row>
                  </Form>

                  <div className="text-center mt-4">
                    <p className="text-muted mb-0">
                      Already registered?{" "}
                      <Link
                        to="/lawyer/login"
                        className="text-primary text-decoration-none"
                      >
                        Login Here
                      </Link>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Card>
        </Container>
      </main>
    </div>
  );
};

export default LawyerRegister;
