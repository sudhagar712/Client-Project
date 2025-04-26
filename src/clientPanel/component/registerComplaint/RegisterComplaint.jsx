import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpeg";
import bgImage from "../../../assets/images/pattern logo.jpg";

const RegisterComplaint = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    sonOf: "",
    mobile: "",
    email: "",
    address: "",
    pincode: "",
    complaintType: "",
    description: "",
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
      // Generate reference number (TN + current date in YYYYMMDD format + random 2 digit number)
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      const random = Math.floor(Math.random() * 100)
        .toString()
        .padStart(2, "0");
      const referenceNumber = `TN${year}${month}${day}${random}`;

      // Redirect to success page with reference number
      navigate(`/complaint-success?ref=${referenceNumber}`);
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

          <Card
            className="border-0 shadow-lg mx-auto"
            style={{ maxWidth: "1000px", borderRadius: "15px" }}
          >
            <Card.Header className="bg-transparent border-0 text-center py-4">
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
              <Card.Title className="mb-2 fs-2 fw-bold text-primary">
                Register a Complaint
              </Card.Title>
              <Card.Text className="text-muted">
                Fill out the form below to register your legal complaint. You
                will receive a reference number for tracking.
              </Card.Text>
            </Card.Header>
            <Card.Body className="p-4 p-md-5">
              <Form
                onSubmit={handleSubmit}
                className="needs-validation"
                noValidate
              >
                <Row className="g-4">
                  <Col xs={12} md={6}>
                    <Form.Group controlId="name">
                      <Form.Label className="fw-medium text-muted">
                        Full Name
                      </Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <i className="bi bi-person text-muted"></i>
                        </span>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          className="border-start-0"
                          style={{ height: "50px" }}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="sonOf">
                      <Form.Label className="fw-medium text-muted">
                        Son/Daughter of
                      </Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <i className="bi bi-people text-muted"></i>
                        </span>
                        <Form.Control
                          type="text"
                          name="sonOf"
                          value={formData.sonOf}
                          onChange={handleChange}
                          placeholder="Enter parent/guardian name"
                          required
                          className="border-start-0"
                          style={{ height: "50px" }}
                        />
                      </div>
                    </Form.Group>
                  </Col>

                  <Col xs={12} md={6}>
                    <Form.Group controlId="dob">
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
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          required
                          className="border-start-0"
                          style={{ height: "50px" }}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="mobile">
                      <Form.Label className="fw-medium text-muted">
                        Mobile Number
                      </Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <i className="bi bi-phone text-muted"></i>
                        </span>
                        <Form.Control
                          type="tel"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleChange}
                          placeholder="Enter your mobile number"
                          required
                          className="border-start-0"
                          style={{ height: "50px" }}
                        />
                      </div>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group controlId="email">
                      <Form.Label className="fw-medium text-muted">
                        Email Address
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
                          placeholder="Enter your email address"
                          required
                          className="border-start-0"
                          style={{ height: "50px" }}
                        />
                      </div>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group controlId="address">
                      <Form.Label className="fw-medium text-muted">
                        Address
                      </Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <i className="bi bi-geo-alt text-muted"></i>
                        </span>
                        <Form.Control
                          as="textarea"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Enter your full address"
                          required
                          className="border-start-0"
                          style={{ height: "100px" }}
                        />
                      </div>
                    </Form.Group>
                  </Col>

                  <Col xs={12} md={6}>
                    <Form.Group controlId="pincode">
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
                          placeholder="Enter your pincode"
                          required
                          className="border-start-0"
                          style={{ height: "50px" }}
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="complaintType">
                      <Form.Label className="fw-medium text-muted">
                        Type of Complaint
                      </Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <i className="bi bi-file-earmark-text text-muted"></i>
                        </span>
                        <Form.Select
                          name="complaintType"
                          value={formData.complaintType}
                          onChange={handleChange}
                          required
                          className="border-start-0"
                          style={{ height: "50px" }}
                        >
                          <option value="">Select complaint type</option>
                          <option value="property">Property Dispute</option>
                          <option value="family">Family Matter</option>
                          <option value="criminal">Criminal Case</option>
                          <option value="civil">Civil Dispute</option>
                          <option value="consumer">Consumer Complaint</option>
                          <option value="corporate">Corporate Law</option>
                          <option value="other">Other</option>
                        </Form.Select>
                      </div>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group controlId="description">
                      <Form.Label className="fw-medium text-muted">
                        Description of Complaint
                      </Form.Label>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <i className="bi bi-pencil text-muted"></i>
                        </span>
                        <Form.Control
                          as="textarea"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          placeholder="Please provide detailed information about your complaint"
                          required
                          className="border-start-0"
                          style={{ height: "150px" }}
                        />
                      </div>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Button
                      type="submit"
                      className="w-100 py-3 mt-4"
                      disabled={loading}
                      style={{
                        background: "linear-gradient(45deg, #012b5c, #1a4b8c)",
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
                          <i className="bi bi-send me-2"></i>
                          Register Complaint
                        </>
                      )}
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </main>
    </div>
  );
};

export default RegisterComplaint;
