import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.jpeg";

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
    <div className="min-vh-100 bg-light">
      <main className="py-1">
        <Container fluid="lg" className="py-1">
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
              <Card.Title className="h2 text-navy-900 mb-3">
                Register a Complaint
              </Card.Title>
              <Card.Text className="text-muted mb-0">
                Fill out the form below to register your legal complaint. You
                will receive a reference number for tracking.
              </Card.Text>
            </Card.Header>
            <Card.Body className="p-5">
              <Form
                onSubmit={handleSubmit}
                className="needs-validation"
                noValidate
              >
                <Row className="g-4">
                  <Col xs={12} md={6}>
                    <Form.Group controlId="name">
                      <Form.Label className="fw-medium">Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="form-control-lg"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="sonOf">
                      <Form.Label className="fw-medium">
                        Son/Daughter of
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="sonOf"
                        value={formData.sonOf}
                        onChange={handleChange}
                        placeholder="Enter parent/guardian name"
                        required
                        className="form-control-lg"
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12} md={6}>
                    <Form.Group controlId="dob">
                      <Form.Label className="fw-medium">
                        Date of Birth
                      </Form.Label>
                      <Form.Control
                        type="date"
                        name="dob"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="form-control-lg"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group controlId="mobile">
                      <Form.Label className="fw-medium">
                        Mobile Number
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Enter your mobile number"
                        required
                        className="form-control-lg"
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group controlId="email">
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

                  <Col xs={12}>
                    <Form.Group controlId="address">
                      <Form.Label className="fw-medium">Address</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your full address"
                        required
                        className="form-control-lg"
                        rows={3}
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12} md={6}>
                    <Form.Group controlId="pincode">
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
                  <Col xs={12} md={6}>
                    <Form.Group controlId="complaintType">
                      <Form.Label className="fw-medium">
                        Type of Complaint
                      </Form.Label>
                      <Form.Select
                        name="complaintType"
                        value={formData.complaintType}
                        onChange={handleChange}
                        required
                        className="form-select-lg"
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
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group controlId="description">
                      <Form.Label className="fw-medium">
                        Description of Complaint
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Please provide detailed information about your complaint"
                        required
                        className="form-control-lg"
                        rows={4}
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
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
                        "Register a Complaint"
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
