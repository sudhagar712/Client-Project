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

    // Demo credentials for lawyer login
    if (email === "lawyer@demo.com" && password === "lawyer123") {
      navigate("/lawyer/dashboard");
    } else {
      setError("Invalid email or password");
    }
    setLoading(false);
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
            style={{ maxWidth: "500px" }}
          >
            <Card.Header className="text-center py-5">
              <img
                src={logo}
                alt="LawForLayman Logo"
                className="mb-3"
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              />
              <Card.Title className="h2 text-navy-900 mb-3">
                Lawyer Login
              </Card.Title>
              <Card.Text className="text-muted mb-0">
                Sign in to access your lawyer dashboard
              </Card.Text>
            </Card.Header>
            <Card.Body className="p-5">
              <Form onSubmit={handleSubmit}>
                {error && (
                  <Alert variant="danger" className="mb-4">
                    {error}
                  </Alert>
                )}

                <Form.Group className="mb-4">
                  <Form.Label className="fw-medium">Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="form-control-lg"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <Form.Label className="fw-medium mb-0">Password</Form.Label>
                    <Link
                      to="/lawyer/forgot-password"
                      className="text-navy-700 text-decoration-none small"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                    className="form-control-lg"
                  />
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
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="text-center py-4">
              <p className="mb-2 text-muted">
                Don't have an account?{" "}
                <Link
                  to="/lawyer/register"
                  className="text-navy-700 text-decoration-none"
                >
                  Register here
                </Link>
              </p>
              <div className="bg-navy-50 p-3 rounded">
                <p className="mb-1 fw-medium text-navy-700">
                  Demo Credentials:
                </p>
                <p className="mb-0 small text-navy-700">
                  Email: lawyer@demo.com
                </p>
                <p className="mb-0 small text-navy-700">Password: lawyer123</p>
              </div>
            </Card.Footer>
          </Card>
        </Container>
      </main>
    </div>
  );
};

export default LawyerLogin;
