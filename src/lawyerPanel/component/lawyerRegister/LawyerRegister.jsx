import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.jpeg";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      navigate("/lawyer/registration-success");
    }, 1500);
  };

  return (
    <div className="min-vh-100 bg-light">
      <main className="py-2">
        <Container fluid="lg" className="py-2">
          <Link
            to="/"
            className="d-flex align-items-center text-navy-700 text-decoration-none mb-4"
          >
            <i className="bi bi-chevron-left me-1"></i>
            Back to Home
          </Link>

          <Card
            className="mx-auto shadow-sm my-5"
            style={{ maxWidth: "800px" }}
          >
            <Card.Header className="text-center py-5">
              <img
                src={logo}
                alt="LawForLayman Logo"
                className="mb-3"
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              />
              <Card.Title className="h2 text-navy-900 mb-3">
                Lawyer Registration
              </Card.Title>
              <Card.Text className="text-muted mb-0">
                Register as a lawyer to provide legal services through our
                platform
              </Card.Text>
            </Card.Header>
            <Card.Body className="p-5">
              <Form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <h3 className="h4 text-navy-900 mb-4">
                    Personal Information
                  </h3>
                  <Row className="g-4">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-medium">
                          First Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="Enter your first name"
                          required
                          className="form-control-lg"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-medium">Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Enter your last name"
                          required
                          className="form-control-lg"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-medium">
                          Email Address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                          required
                          className="form-control-lg"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-medium">
                          Phone Number
                        </Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          required
                          className="form-control-lg"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-medium">
                          Date of Birth
                        </Form.Label>
                        <Form.Control
                          type="date"
                          name="dob"
                          value={formData.dob}
                          onChange={handleChange}
                          required
                          className="form-control-lg"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-medium">Gender</Form.Label>
                        <Form.Select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                          className="form-select-lg"
                        >
                          <option value="">Select gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>

                <div className="mb-5">
                  <h3 className="h4 text-navy-900 mb-4">
                    Professional Information
                  </h3>
                  <Row className="g-4">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-medium">
                          Bar Council Registration Number
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="barCouncilNumber"
                          value={formData.barCouncilNumber}
                          onChange={handleChange}
                          placeholder="Enter your registration number"
                          required
                          className="form-control-lg"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-medium">
                          Years of Experience
                        </Form.Label>
                        <Form.Select
                          name="yearsOfExperience"
                          value={formData.yearsOfExperience}
                          onChange={handleChange}
                          required
                          className="form-select-lg"
                        >
                          <option value="">Select experience</option>
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
                        <Form.Label className="fw-medium">
                          Areas of Specialization
                        </Form.Label>
                        <Form.Select
                          name="specialization"
                          value={formData.specialization}
                          onChange={handleChange}
                          required
                          className="form-select-lg"
                        >
                          <option value="">
                            Select primary specialization
                          </option>
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
                        <Form.Label className="fw-medium">
                          Educational Qualifications
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          name="education"
                          value={formData.education}
                          onChange={handleChange}
                          placeholder="Enter your educational qualifications"
                          required
                          className="form-control-lg"
                          rows={3}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>

                <div className="mb-5">
                  <h3 className="h4 text-navy-900 mb-4">
                    Location & Availability
                  </h3>
                  <Row className="g-4">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-medium">City</Form.Label>
                        <Form.Control
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Enter your city"
                          required
                          className="form-control-lg"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-medium">State</Form.Label>
                        <Form.Control
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          placeholder="Enter your state"
                          required
                          className="form-control-lg"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-medium">Pincode</Form.Label>
                        <Form.Control
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          placeholder="Enter your pincode"
                          required
                          className="form-control-lg"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-medium">
                          Availability
                        </Form.Label>
                        <Form.Select
                          name="availability"
                          value={formData.availability}
                          onChange={handleChange}
                          required
                          className="form-select-lg"
                        >
                          <option value="">Select availability</option>
                          <option value="full-time">Full-time</option>
                          <option value="part-time">Part-time</option>
                          <option value="weekends">Weekends only</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                </div>

                <div className="mb-5">
                  <h3 className="h4 text-navy-900 mb-4">Account Information</h3>
                  <Row className="g-4">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-medium">Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                          className="form-control-lg"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label className="fw-medium">
                          Confirm Password
                        </Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          required
                          className="form-control-lg"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </div>

                <Button
                  type="submit"
                  className="w-100 btn-lg bg-navy-700 border-0 py-3"
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
                    "Register as a Lawyer"
                  )}
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="text-center py-4">
              <p className="mb-0 text-muted">
                Already registered?{" "}
                <Link
                  to="/lawyer/login"
                  className="text-navy-700 text-decoration-none"
                >
                  Login here
                </Link>
              </p>
            </Card.Footer>
          </Card>
        </Container>
      </main>
    </div>
  );
};

export default LawyerRegister;
