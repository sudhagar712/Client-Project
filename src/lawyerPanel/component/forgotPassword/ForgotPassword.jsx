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
            to="/lawyer/login"
            className="d-flex align-items-center text-white fs-5 fw-medium text-decoration-none mb-4"
            style={{ transition: "all 0.3s ease" }}
          >
            <i className="bi bi-arrow-left me-2"></i>
            Back to Login
          </Link>

          <Card
            className="border-0 shadow-lg mx-auto"
            style={{ maxWidth: "500px", borderRadius: "15px" }}
          >
            <Card.Header className="text-center bg-transparent border-0 py-4">
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
              <h2 className="fs-2 fw-bold text-primary mb-2">
                Reset <span className="text-warning">Password</span>
              </h2>
              <p className="text-muted mb-0">
                Enter your email address to receive password reset instructions
              </p>
            </Card.Header>

            <Card.Body className="p-4 p-md-5">
              {success ? (
                <Alert
                  variant="success"
                  className="text-center border-0 shadow-sm"
                >
                  <i className="bi bi-check-circle-fill me-2"></i>
                  Password reset instructions have been sent to your email
                  address.
                  <div className="mt-3">
                    <Link
                      to="/lawyer/login"
                      className="btn btn-primary px-4"
                      style={{
                        background: "linear-gradient(45deg, #012b5c, #1a4b8c)",
                        border: "none",
                        borderRadius: "10px",
                      }}
                    >
                      Return to Login
                    </Link>
                  </div>
                </Alert>
              ) : (
                <Form onSubmit={handleSubmit}>
                  {error && (
                    <Alert variant="danger" className="mb-4 border-0 shadow-sm">
                      <i className="bi bi-exclamation-circle-fill me-2"></i>
                      {error}
                    </Alert>
                  )}

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-medium text-muted">
                      Email Address
                    </Form.Label>
                    <div className="input-group">
                      <span className="input-group-text bg-light border-end-0">
                        <i className="bi bi-envelope text-muted"></i>
                      </span>
                      <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your registered email address"
                        required
                        className="border-start-0"
                        style={{ height: "50px" }}
                      />
                    </div>
                    <Form.Text className="text-muted">
                      We'll send password reset instructions to this email
                      address.
                    </Form.Text>
                  </Form.Group>

                  <Button
                    type="submit"
                    className="w-100 py-3"
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
                        Sending...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-send me-2"></i>
                        Send Reset Instructions
                      </>
                    )}
                  </Button>
                </Form>
              )}
            </Card.Body>

            <Card.Footer className="text-center py-4 bg-transparent border-0">
              <p className="mb-0 text-muted">
                Remember your password?{" "}
                <Link
                  to="/lawyer/login"
                  className="text-primary fw-medium text-decoration-none"
                  style={{ transition: "all 0.3s ease" }}
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
