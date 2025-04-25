import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Button,
  Badge,
  Form,
  Nav,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  HouseFill as House,
  CalendarFill as Calendar,
  FileTextFill as FileText,
  PersonFill as Person,
  BellFill as Bell,
  Search,
  BoxArrowRight,
  BriefcaseFill,
  InboxFill,
  ClockFill,
  CheckCircleFill,
  List,
  X,
} from "react-bootstrap-icons";
import "./LawyerDashboard.css";
// Mock data for assigned cases
const assignedCases = [
  {
    id: "CASE001",
    clientName: "John Smith",
    type: "Property Dispute",
    status: "New",
    nextHearing: "2024-04-25",
  },
  {
    id: "CASE002",
    clientName: "Sarah Johnson",
    type: "Family Law",
    status: "In Progress",
    nextHearing: "2024-04-28",
  },
  {
    id: "CASE003",
    clientName: "Michael Brown",
    type: "Criminal Defense",
    status: "Completed",
    nextHearing: "2024-05-02",
  },
];

const LawyerDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate("/lawyer/login");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && window.innerWidth <= 768) {
        const sidebar = document.querySelector(".sidebar");
        const toggleBtn = document.querySelector(".mobile-toggle-btn");
        if (
          sidebar &&
          !sidebar.contains(event.target) &&
          !toggleBtn.contains(event.target)
        ) {
          closeSidebar();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="d-flex min-vh-100">
      {/* Mobile Menu Toggle Button with Name */}
      <div className="mobile-toggle-container">
        <Button
          variant="outline-primary"
          className="mobile-toggle-btn"
          onClick={toggleSidebar}
        >
          <div className="icon">
            {isSidebarOpen ? <X size={20} /> : <List size={20} />}
          </div>
        </Button>
        <div className="mobile-toggle-name">
          {isSidebarOpen ? "Close Menu" : "Open Menu"}
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`sidebar-overlay ${isSidebarOpen ? "active" : ""}`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
        <div className="d-flex flex-column h-100">
          {/* Top Section */}
          <div className="p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="mb-0">Lawyer Dashboard</h4>
              <Button
                variant="link"
                className="d-md-none p-0"
                onClick={closeSidebar}
              >
                <X size={20} />
              </Button>
            </div>
            <Nav className="flex-column">
              <Nav.Link href="#" className="active">
                <House className="icon me-2" />
                Dashboard
              </Nav.Link>
              <Nav.Link href="#">
                <Calendar className="icon me-2" />
                Appointments
              </Nav.Link>
              <Nav.Link href="#">
                <FileText className="icon me-2" />
                Cases
              </Nav.Link>
              <Nav.Link href="#">
                <Person className="icon me-2" />
                Profile
              </Nav.Link>
            </Nav>
          </div>

          {/* Bottom Section with Logout */}
          <div className="mt-auto">
            <div className="p-4 border-top">
              <Button
                variant="link"
                className="text-danger w-100 d-flex align-items-center justify-content-center"
                onClick={handleLogout}
              >
                <BoxArrowRight className="me-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content flex-grow-1">
        <div className="p-4">
          {/* Header */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-4">
            <h2 className="mb-3 mb-md-0">Welcome, John Doe</h2>
            <div className="d-flex flex-column flex-md-row align-items-stretch align-items-md-center gap-3">
              <Form.Control
                type="search"
                placeholder="Search..."
                className="me-md-3"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="d-flex gap-2 align-items-center">
                <Button variant="link" className="p-0">
                  <Search size={20} className="text-muted" />
                </Button>
                <Button variant="link" className="p-0">
                  <Bell size={20} className="text-muted" />
                </Button>
                <div className="header-user ms-2">
                  <span className="header-name">John Doe</span>
                  <img
                    src="https://ui-avatars.com/api/?name=John+Doe&background=0D6EFD&color=fff"
                    alt="User Avatar"
                    className="header-avatar"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards with Icons */}
          <Row className="g-4 mb-4">
            <Col md={3}>
              <Card className="h-100 stats-card">
                <Card.Body className="d-flex align-items-center">
                  <div className="icon-wrapper bg-primary bg-opacity-10 me-3">
                    <BriefcaseFill className="text-primary" size={24} />
                  </div>
                  <div>
                    <h6 className="text-muted mb-2">Active Cases</h6>
                    <h3 className="mb-0">12</h3>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 stats-card">
                <Card.Body className="d-flex align-items-center">
                  <div className="icon-wrapper bg-success bg-opacity-10 me-3">
                    <InboxFill className="text-success" size={24} />
                  </div>
                  <div>
                    <h6 className="text-muted mb-2">New Assignments</h6>
                    <h3 className="mb-0">3</h3>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 stats-card">
                <Card.Body className="d-flex align-items-center">
                  <div className="icon-wrapper bg-warning bg-opacity-10 me-3">
                    <ClockFill className="text-warning" size={24} />
                  </div>
                  <div>
                    <h6 className="text-muted mb-2">Upcoming Hearings</h6>
                    <h3 className="mb-0">5</h3>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="h-100 stats-card">
                <Card.Body className="d-flex align-items-center">
                  <div className="icon-wrapper bg-info bg-opacity-10 me-3">
                    <CheckCircleFill className="text-info" size={24} />
                  </div>
                  <div>
                    <h6 className="text-muted mb-2">Resolved Cases</h6>
                    <h3 className="mb-0">8</h3>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Tabs */}
          <Nav variant="tabs" className="mb-4">
            <Nav.Item>
              <Nav.Link active>Assigned Cases</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Upcoming Appointments</Nav.Link>
            </Nav.Item>
          </Nav>

          {/* Cases Table */}
          <Card>
            <Card.Body>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>Case ID</th>
                    <th>Client Name</th>
                    <th>Case Type</th>
                    <th>Status</th>
                    <th>Next Hearing</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {assignedCases.map((case_) => (
                    <tr key={case_.id}>
                      <td>{case_.id}</td>
                      <td>{case_.clientName}</td>
                      <td>{case_.type}</td>
                      <td>
                        <Badge
                          bg={
                            case_.status === "New"
                              ? "primary"
                              : case_.status === "In Progress"
                              ? "warning"
                              : "success"
                          }
                        >
                          {case_.status}
                        </Badge>
                      </td>
                      <td>{case_.nextHearing}</td>
                      <td>
                        <Button variant="outline-primary" size="sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LawyerDashboard;
