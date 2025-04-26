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

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Demo credentials for admin login
    if (email === "admin@demo.com" && password === "admin123") {
      navigate("/admin/dashboard");
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

          <Row className="justify-content-center align-items-center min-vh-100">
            {/* Left Side Image */}
            <Col
              lg={6}
              className="d-none d-lg-flex justify-content-center align-items-center"
            >
              <div className="text-center">
                <img
                  src={logo}
                  alt="LawForLayman Logo"
                  className="img-fluid mb-4"
                  style={{
                    maxWidth: "300px",
                    maxHeight: "300px",
                    objectFit: "cover",
                    borderRadius: "50%",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                  }}
                />
                <h2 className="text-white fw-bold mb-3">Welcome Back!</h2>
                <p className="text-white-50">
                  Please login to access the admin dashboard
                </p>
              </div>
            </Col>

            {/* Right Side Form */}
            <Col lg={6}>
              <Card
                className="border-0 shadow-lg"
                style={{ borderRadius: "15px" }}
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
                    Admin Login
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Enter your credentials to continue
                  </Card.Text>
                </Card.Header>
                <Card.Body className="p-4 p-md-5">
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
                      <Form.Label className="fw-medium text-muted">
                        Password
                      </Form.Label>
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
                  </Form>
                </Card.Body>
                <Card.Footer className="bg-light border-0 text-center py-4">
                  <div
                    className="p-3 rounded"
                    style={{ background: "rgba(1, 43, 92, 0.05)" }}
                  >
                    <p className="mb-2 fw-medium text-primary">
                      Demo Credentials
                    </p>
                    <p className="mb-1 small text-muted">
                      Email: admin@demo.com
                    </p>
                    <p className="mb-0 small text-muted">Password: admin123</p>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default AdminLogin;
