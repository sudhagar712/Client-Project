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
import logo from "../../../assets/logo.jpeg";
import bgImage from "../../../assets/images/pattern logo.jpg";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    // Simulate API call
    setTimeout(() => {
      if (email === "lawyer@demo.com") {
        setSuccess(true);
      } else {
        setError("Email not found. Please check and try again.");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div
      className="min-vh-100"
      style={{
        backgroundImage: `linear-gradient(#012b5c,rgba(1, 43, 92, 0.39)), url(${bgImage})`,
        backgroundSize: "fit",
        backgroundRepeat: "repeat"
      }}
    >
      <main className="py-2">
        <Container fluid="lg" className="py-2">
          <Link
            to="/lawyer/login"
            className="d-flex align-items-center text-white fs-3 fw-bold text-decoration-none mb-4"
          >
            <i className="bi bi-chevron-left me-1"></i>
            Back to Login
          </Link>

          <Card
            className="mx-auto shadow-sm my-5 opacity-75"
            style={{ maxWidth: "500px" }}
          >
            <Card.Header className="text-center bg-primary py-5">
              <img
                src={logo}
                alt="LawForLayman Logo"
                className="mb-3"
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              />
              <Card.Title className="h2 mb-3">
                Reset <span className="text-warning">Password</span>
              </Card.Title>
              <Card.Text className="text-warning mb-0">
                Enter your email address to receive password reset instructions
              </Card.Text>
            </Card.Header>
            <Card.Body className="p-5">
              {success ? (
                <Alert variant="success" className="text-center">
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Password reset instructions have been sent to your email
                  address.
                  <div className="mt-3">
                    <Link to="/lawyer/login" className="btn btn-navy-700">
                      Return to Login
                    </Link>
                  </div>
                </Alert>
              ) : (
                <Form onSubmit={handleSubmit}>
                  {error && (
                    <Alert variant="danger" className="mb-4">
                      {error}
                    </Alert>
                  )}

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-medium">Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your registered email address"
                      required
                      className="form-control "
                    />
                    <Form.Text className="text-black">
                      We'll send password reset instructions to this email
                      address.
                    </Form.Text>
                  </Form.Group>

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
                        Sending...
                      </>
                    ) : (
                      "Send Reset Instructions"
                    )}
                  </Button>
                </Form>
              )}
            </Card.Body>
            <Card.Footer className="text-center py-4">
              <p className="mb-0 text-muted">
                Remember your password?{" "}
                <Link
                  to="/lawyer/login"
                  className="text-warning fw-bold text-decoration-none"
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

export default ForgotPassword;
