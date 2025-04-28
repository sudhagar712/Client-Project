import React from "react";

const RecentComplaints = () => {
  const complaints = [
    {
      ref: "TN20250415",
      name: "Rahul Sharma",
      type: "Property Dispute",
      date: "2025-04-15",
      location: "Chennai",
      status: "New"
    },
    {
      ref: "TN20250416",
      name: "Priya Patel",
      type: "Family Matter",
      date: "2025-04-16",
      location: "Mumbai",
      status: "Assigned"
    },
    {
      ref: "TN20250417",
      name: "Amit Kumar",
      type: "Consumer Complaint",
      date: "2025-04-17",
      location: "Delhi",
      status: "In Progress"
    },
    {
      ref: "TN20250418",
      name: "Sneha Reddy",
      type: "Civil Dispute",
      date: "2025-04-18",
      location: "Bangalore",
      status: "New"
    },
    {
      ref: "TN20250419",
      name: "Vikram Singh",
      type: "Criminal Case",
      date: "2025-04-19",
      location: "Hyderabad",
      status: "Assigned"
    }
  ];

  const getBadgeClass = (status) => {
    switch (status) {
      case "New":
        return "bg-primary";
      case "Assigned":
        return "bg-warning text-dark";
      case "In Progress":
        return "bg-success";
      default:
        return "bg-secondary";
    }
  };

  return (
    <div className="container bg-light p-5 my-4">
      <h4>Recent Complaints</h4>
      <p className="text-muted">Manage and assign complaints to lawyers</p>
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th>Reference</th>
              <th>Name</th>
              <th>Type</th>
              <th>Date</th>
              <th>Location</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {complaints.map((item, idx) => (
              <tr key={idx}>
                <td>{item.ref}</td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.date}</td>
                <td>{item.location}</td>
                <td>
                  <span className={`badge ${getBadgeClass(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                <td>
                  {item.status === "New" ? (
                    <button className="btn btn-outline-primary btn-sm">
                      Assign
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      disabled
                    >
                      View
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentComplaints;
