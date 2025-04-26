import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Card,
  Alert
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
        backgroundImage: `linear-gradient(#012b5c,rgba(1, 43, 92, 0.39)), url(${bgImage})`,
        backgroundSize: "fit",
        backgroundRepeat: "repeat"
      }}
    >
      <main className="py-2 w-100">
        <Container fluid="lg" className="py-2">
          <Link
            to="/"
            className="d-flex align-items-center text-white fs-2 fw-bold text-decoration-none mb-4"
          >
            <i className="bi bi-chevron-left me-1"></i>
            Back to Home
          </Link>

          <Row className="justify-content-center align-items-center min-vh-100">
            {/* Left Side Image */}
            <Col lg={6} className="d-none bg-primary opacity-25  p-5 d-lg-flex justify-content-center">
              <img
                src={logo}
                alt="LawForLayman Logo"
                className="img-fluid"
                style={{
                  maxWidth: "400px",
                  maxHeight: "400px",
                  objectFit: "cover",
                  borderRadius: "50%"
                }}
              />
            </Col>

            {/* Right Side Form */}
            <Col lg={6}>
              <Card className="bg-light opacity-75">
                <Card.Header className="text-center py-5">
                  <img
                    src={logo}
                    alt="LawForLayman Logo"
                    className="mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%"
                    }}
                  />
                  <Card.Title className=" mb-3 fs-1 fw-bold">
                    Admin <span className="text-warning">Login</span>
                  </Card.Title>
                  <Card.Text className="text-warning fs-5 mb-0">
                    Sign in to access the admin dashboard
                  </Card.Text>
                </Card.Header>
                <Card.Body className="p-5">
                  <div className="">
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
                          className="form-control"
                        />
                      </Form.Group>

                      <Form.Group className="mb-4">
                        <Form.Label className="fw-medium">Password</Form.Label>
                        <Form.Control
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                          required
                          className="form-control"
                        />
                      </Form.Group>

                      <Button
                        type="submit"
                        className="px-5  border-0 py-3"
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
                  </div>
                </Card.Body>
                <Card.Footer className="text-center py-4">
                  <div className="bg-navy-50 p-3 rounded">
                    <p className="mb-1 fw-medium text-navy-700">
                      Demo Credentials:
                    </p>
                    <p className="mb-0 small text-navy-700">
                      Email: admin@demo.com
                    </p>
                    <p className="mb-0 small text-navy-700">
                      Password: admin123
                    </p>
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
