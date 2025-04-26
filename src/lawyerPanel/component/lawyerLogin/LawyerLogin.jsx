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
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.jpeg";
import bgImage from "../../../assets/images/pattern logo.jpg";

const LawyerLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (email === "lawyer@demo.com" && password === "lawyer123") {
      navigate("/lawyer/dashboard");
    } else {
      setError("Invalid email or password");
    }
    setLoading(false);
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
              {/* Left Side - Logo and Welcome Text */}
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
                <h2 className="text-white fw-bold mb-3">Welcome Back!</h2>
                <p className="text-white-50">
                  Sign in to access your Lawyer Dashboard
                </p>
              </Col>

              {/* Right Side - Login Form */}
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
                      Lawyer Login
                    </h3>
                    <p className="text-muted">
                      Enter your credentials to continue
                    </p>
                  </div>

                  <Form onSubmit={handleSubmit}>
                    {error && (
                      <Alert
                        variant="danger"
                        className="mb-4"
                        style={{ borderRadius: "10px" }}
                      >
                        <i className="bi bi-exclamation-circle me-2"></i>
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
                          placeholder="Enter your email"
                          required
                          className="border-start-0"
                          style={{ height: "50px" }}
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <Form.Label className="fw-medium text-muted mb-0">
                          Password
                        </Form.Label>
                        <Link
                          to="/lawyer/forgot-password"
                          className="text-primary text-decoration-none small"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <div className="input-group">
                        <span className="input-group-text bg-light border-end-0">
                          <i className="bi bi-lock text-muted"></i>
                        </span>
                        <Form.Control
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                          required
                          className="border-start-0"
                          style={{ height: "50px" }}
                        />
                      </div>
                    </Form.Group>

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
                          Signing in...
                        </>
                      ) : (
                        <>
                          <i className="bi bi-box-arrow-in-right me-2"></i>
                          Sign In
                        </>
                      )}
                    </Button>

                    <div className="text-center mt-4">
                      <p className="text-muted mb-0">
                        Don't have an account?{" "}
                        <Link
                          to="/lawyer/register"
                          className="text-primary text-decoration-none"
                        >
                          Register here
                        </Link>
                      </p>
                    </div>

                    <div
                      className="mt-4 p-3 rounded"
                      style={{ background: "rgba(1, 43, 92, 0.05)" }}
                    >
                      <p className="mb-2 fw-medium text-primary">
                        Demo Credentials
                      </p>
                      <p className="mb-1 small text-muted">
                        Email: lawyer@demo.com
                      </p>
                      <p className="mb-0 small text-muted">
                        Password: lawyer123
                      </p>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </Card>
        </Container>
      </main>
    </div>
  );
};

export default LawyerLogin;
