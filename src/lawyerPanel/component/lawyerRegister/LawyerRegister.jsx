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
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
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
      className="min-vh-100 d-flex align-items-center"
      style={{
        backgroundImage: `linear-gradient(#012b5c, rgba(1,43,92,0.5)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <Container>
        <Link
          to="/"
          className="d-flex align-items-center text-white mt-3 mb-4 fs-3 fw-bold text-decoration-none mb-4"
        >
          <i className="bi bi-chevron-left me-1"></i> Back to Home
        </Link>

        <Card className="bg-light opacity-75">
          <Row className="g-0">
            {/* Left Side */}
            <Col
              md={5}
              className="bg-primary text-white d-flex flex-column justify-content-center align-items-center p-4"
              style={{
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px"
              }}
            >
              <img
                src={logo}
                alt="LawForLayman Logo"
                className="mb-4"
                style={{
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  backgroundColor: "#fff"
                }}
              />
              <h2 className="fw-bold">Welcome Lawyer!</h2>
              <p className="text-center mt-2 px-3 text-warning">
                Join our platform to offer your legal expertise and services.
              </p>
            </Col>

            {/* Right Side */}
            <Col md={7}>
              <Card.Body className="p-5">
                <h3 className="text-center mb-4 text-black fw-bold fs-1 ">
                  Lawyer <span className="text-warning">Registration</span>
                </h3>
                <Form onSubmit={handleSubmit}>
                  <Row className="g-3 mt-2">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First Name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last Name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                          type="date"
                          name="dob"
                          value={formData.dob}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Gender</Form.Label>
                        <Form.Select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Bar Council Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="barCouncilNumber"
                          value={formData.barCouncilNumber}
                          onChange={handleChange}
                          placeholder="Registration Number"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Years of Experience</Form.Label>
                        <Form.Select
                          name="yearsOfExperience"
                          value={formData.yearsOfExperience}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Experience</option>
                          <option value="0-2">0-2 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="6-10">6-10 years</option>
                          <option value="11-15">11-15 years</option>
                          <option value="15+">15+ years</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group>
                        <Form.Label>Specialization</Form.Label>
                        <Form.Select
                          name="specialization"
                          value={formData.specialization}
                          onChange={handleChange}
                          required
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
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group>
                        <Form.Label>Education</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={2}
                          name="education"
                          value={formData.education}
                          onChange={handleChange}
                          placeholder="Educational Qualifications"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="City"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          placeholder="State"
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Pincode</Form.Label>
                        <Form.Control
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          placeholder="Pincode"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Availability</Form.Label>
                        <Form.Select
                          name="availability"
                          value={formData.availability}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Availability</option>
                          <option value="full-time">Full-time</option>
                          <option value="part-time">Part-time</option>
                          <option value="weekends">Weekends only</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col md={12} className="mt-3">
                      <Button
                        type="submit"
                        className="w-100 btn-primary btn-lg"
                        disabled={loading}
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
                          "Register Now"
                        )}
                      </Button>
                    </Col>
                  </Row>
                </Form>

                <div className="text-center mt-3">
                  <p className="text-muted mb-0">
                    Already registered?{" "}
                    <Link
                      to="/lawyer/login"
                      className="text-primary fw-bold text-decoration-none"
                    >
                      Login Here
                    </Link>
                  </p>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
};

export default LawyerRegister;
