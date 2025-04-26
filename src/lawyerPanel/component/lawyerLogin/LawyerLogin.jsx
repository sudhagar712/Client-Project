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
        backgroundImage: `linear-gradient(#012b5c,rgba(1, 43, 92, 0.39)), url(${bgImage})`,
        backgroundSize: "fit",
        backgroundRepeat: "repeat"
      }}
    >
      <main className="py-2 flex-grow-1">
        <Container fluid="lg" className="py-2">
          <Link
            to="/"
            className="d-flex align-items-center fw-bold fs-3 justify-content-start  text-white text-decoration-none mb-4"
          >
            <i className="bi bi-chevron-left me-1"></i>
            Back to Home
          </Link>

          <Card className="bg-transparent ">
            <Row className="g-0 ">
              {/* Left Side - Logo and Welcome Text */}
              <Col
                md={5}
                className="d-flex flex-column align-items-center justify-content-center  bg-primary opacity-75   text-center rounded-start"
              >
                <img
                  src={logo}
                  alt="LawForLayman Logo"
                  style={{
                    width: "300px",
                    height: "300px",
                    borderRadius: "50%",
                    marginBottom: "20px"
                  }}
                />
                <h2 className="fs-1 text-white fw-bolder">Welcome Back!</h2>
                <p className="mt-2 text-warning">
                  Sign in to access your Lawyer Dashboard.
                </p>
              </Col>

              {/* Right Side - Login Form */}
              <Col md={7} className="p-5 bg-light opacity-75">
                <div className="d-flex flex-column justify-content-center">
                  <h3 className=" fw-bold fs-1 mb-4  ">
                    Lawyer <span className="text-warning ">Login</span>{" "}
                  </h3>
                  <Form onSubmit={handleSubmit}>
                    {error && (
                      <Alert variant="danger" className="mb-4">
                        {error}
                      </Alert>
                    )}
                    <div className="d-flex flex-column justify-content-center  ">
                      <Form.Group className="mb-4 ">
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
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <Form.Label className="fw-medium mb-0">
                            Password
                          </Form.Label>
                        </div>
                        <Form.Control
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                          required
                          className="form-control w-100"
                        />
                      </Form.Group>
                    </div>

                    <Link
                      to="/lawyer/forgot-password"
                      className="text-navy-700 text-decoration-none small"
                    >
                      Forgot password?
                    </Link>

                    <div className="mt-3">
                      <Button
                        type="submit"
                        className="px-5 btn btn-primary  text-white fw-bold border-0 py-3"
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
                    </div>
                  </Form>
                </div>

                <div className="text-center mt-4">
                  <p className="text-muted">
                    Don't have an account?{" "}
                    <Link
                      to="/lawyer/register"
                      className="text-navy-700 text-decoration-none"
                    >
                      Register here
                    </Link>
                  </p>
                  <hr className="mt-5 text-white " />
                  <div className="bg-navy-50 p-3 rounded mt-3">
                    <p className="mb-1 fw-medium text-navy-700">
                      Demo Credentials:
                    </p>
                    <p className="mb-0 small text-navy-700">
                      Email: lawyer@demo.com
                    </p>
                    <p className="mb-0 small text-navy-700">
                      Password: lawyer123
                    </p>
                  </div>
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
