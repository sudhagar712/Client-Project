import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import bgImage from "../assets/images/service.png"; 
import logo from "../assets/images/logo.png";


const features = [
  {
    icon: "bi-file-earmark-text",
    title: "Quick access to legal documents",
    colorClass: "icon-blue"
  },
  {
    icon: "bi-pen",
    title: "Efficient document creation",
    colorClass: "icon-green"
  },
  {
    icon: "bi-gear",
    title: "Time-saving automation",
    colorClass: "icon-orange"
  },
  {
    icon: "bi-search",
    title: "Enhanced legal analysis with precedents",
    colorClass: "icon-red"
  },
  {
    icon: "bi-star",
    title: "Expertise of legal veterans",
    colorClass: "icon-purple"
  },
  {
    icon: "bi-shield-check",
    title: "Greater transparency",
    colorClass: "icon-teal"
  }
];

const AllInOnePlatform = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);



    const sectionStyle = {
      backgroundImage: `linear-gradient(#012b5c,rgba(1, 43, 92, 0.17)), url(${bgImage})`,
      backgroundSize: "fit",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      color: "white"
    };


  return (
    <div className=" text-center py-5" style={sectionStyle}>
      <Container>
        <h1 data-aos="fade-up" className="mb-5 fw-bold text-white fs-1">
          All in one<span className="text-warning fs-1">platform</span>
        </h1>
        <p className="mb-5" data-aos="fade-up" data-aos-delay="100">
          <img
            src={logo}
            alt="logo"
            style={{ height: 200, borderRadius: "50%" }}
          />
        </p>

        <Row className="gy-4 justify-content-center">
          {features.map((feature, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              lg={4}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <Card className="feature-card text-center p-4 h-100 shadow-glow opacity-75 rounded">
                <Card.Body>
                  <i
                    className={`bi ${feature.icon} fs-1 mb-3 ${feature.colorClass}`}
                  ></i>
                  <Card.Text className="fw-semibold">{feature.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllInOnePlatform;
