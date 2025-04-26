import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import bgImage from "../../../assets/images/service.png";

const TrackComplaint = () => {
  const [referenceNumber, setReferenceNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [complaintDetails, setComplaintDetails] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setComplaintDetails(null);

    // Simulate API call
    setTimeout(() => {
      if (referenceNumber.startsWith("TN")) {
        setComplaintDetails({
          referenceNumber,
          status: "In Progress",
          date: new Date().toLocaleDateString(),
          lawyerAssigned: "Adv. John Doe",
          nextHearing: "2024-05-15",
          caseType: "Property Dispute",
          description: "Property boundary dispute with neighbor",
          updates: [
            {
              date: "2024-04-20",
              status: "Complaint Registered",
              description: "Your complaint has been registered successfully",
            },
            {
              date: "2024-04-22",
              status: "Lawyer Assigned",
              description: "Adv. John Doe has been assigned to your case",
            },
            {
              date: "2024-04-25",
              status: "First Consultation",
              description: "Initial consultation completed with your lawyer",
            },
          ],
        });
      } else {
        setError("Invalid reference number. Please check and try again.");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={{
            backgroundImage: `linear-gradient(#012b5c,rgba(1, 43, 92, 0.39)), url(${bgImage})`,
            backgroundSize: "fit",
            backgroundRepeat: "repeat"
          }}>
      <main className="py-2">
        <Container fluid="lg" className="py-2">
          <Link
            to="/"
            className="d-flex align-items-center fs-3 text-white fw-bold text-decoration-none mb-4"
          >
            <i className="bi bi-chevron-left me-1"></i>
            Back to Home
          </Link>

          <Card
            className="mx-auto shadow-sm opacity-75 my-5"
            style={{ maxWidth: "700px" }}
          >
            <Card.Header className="text-center py-5">
              <Card.Title className="h2 bg-warning p-4 mb-3">
                Track Your Complaint
              </Card.Title>
              <Card.Text className="text-muted mb-0">
                Enter your reference number to check the status of your
                complaint
              </Card.Text>
            </Card.Header>
            <Card.Body className="p-5">
              <Form onSubmit={handleSearch} className="mb-4">
                <Row className="g-3">
                  <Col xs={12}>
                    <Form.Group controlId="referenceNumber ">
                      <Form.Label className="fw-medium ">
                        Reference Number
                      </Form.Label>
                      <div className="d-flex gap-3 justify-content-center align-items-center">
                        <Form.Control
                          type="text"
                          value={referenceNumber}
                          onChange={(e) => setReferenceNumber(e.target.value)}
                          placeholder="Enter your reference number (e.g., TN20240423XX)"
                          required
                          className="form-control  "
                        />
                        <Button
                          type="submit"
                          className=" btn btn-warning  px-4"
                          disabled={loading}
                        >
                          {loading ? (
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                          ) : (
                            <i className="bi bi-search fs-4"></i>
                          )}
                        </Button>
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>

              {error && (
                <Alert variant="danger" className="mt-3">
                  {error}
                </Alert>
              )}

              {complaintDetails && (
                <div className="mt-4">
                  <h3 className="h4 text-navy-700 mb-4">Complaint Details</h3>

                  <Row className="g-4 mb-4">
                    <Col md={6}>
                      <div className="p-3 bg-light rounded">
                        <p className="mb-1 text-muted">Reference Number</p>
                        <p className="mb-0 fw-bold">
                          {complaintDetails.referenceNumber}
                        </p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="p-3 bg-light rounded">
                        <p className="mb-1 text-muted">Status</p>
                        <p className="mb-0 fw-bold text-primary">
                          {complaintDetails.status}
                        </p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="p-3 bg-light rounded">
                        <p className="mb-1 text-muted">Date Registered</p>
                        <p className="mb-0 fw-bold">{complaintDetails.date}</p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="p-3 bg-light rounded">
                        <p className="mb-1 text-muted">Assigned Lawyer</p>
                        <p className="mb-0 fw-bold">
                          {complaintDetails.lawyerAssigned}
                        </p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="p-3 bg-light rounded">
                        <p className="mb-1 text-muted">Next Hearing</p>
                        <p className="mb-0 fw-bold">
                          {complaintDetails.nextHearing}
                        </p>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="p-3 bg-light rounded">
                        <p className="mb-1 text-muted">Case Type</p>
                        <p className="mb-0 fw-bold">
                          {complaintDetails.caseType}
                        </p>
                      </div>
                    </Col>
                  </Row>

                  <div className="mt-4">
                    <h4 className="h5 text-navy-700 mb-3">Case Updates</h4>
                    <div className="timeline">
                      {complaintDetails.updates.map((update, index) => (
                        <div key={index} className="timeline-item mb-4">
                          <div className="d-flex">
                            <div
                              className="timeline-marker bg-navy-700 rounded-circle me-3"
                              style={{
                                width: "12px",
                                height: "12px",
                                marginTop: "6px",
                              }}
                            ></div>
                            <div>
                              <p className="mb-1 fw-bold">{update.status}</p>
                              <p className="mb-1 text-muted small">
                                {update.date}
                              </p>
                              <p className="mb-0">{update.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </Card.Body>
          </Card>
        </Container>
      </main>
    </div>
  );
};

export default TrackComplaint;
