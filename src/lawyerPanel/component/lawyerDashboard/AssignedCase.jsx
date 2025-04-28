import React from "react";

const cases = [
  {
    reference: "TN20250415",
    client: "Rahul Sharma",
    type: "Property Dispute",
    assigned: "2025-04-16",
    hearing: "2025-04-25",
    status: "New"
  },
  {
    reference: "TN20250416",
    client: "Priya Patel",
    type: "Family Matter",
    assigned: "2025-04-17",
    hearing: "2025-04-28",
    status: "In Progress"
  },
  {
    reference: "TN20250419",
    client: "Vikram Singh",
    type: "Criminal Case",
    assigned: "2025-04-20",
    hearing: "2025-04-30",
    status: "In Progress"
  }
];

const AssignedCases = () => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Assigned Cases</h5>
        <p className="card-text text-muted small">
          View and manage your assigned legal cases
        </p>
        <div className="table-responsive">
          <table className="table table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Reference</th>
                <th>Client</th>
                <th>Type</th>
                <th>Date Assigned</th>
                <th>Next Hearing</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((item, index) => (
                <tr key={index}>
                  <td>{item.reference}</td>
                  <td>{item.client}</td>
                  <td>{item.type}</td>
                  <td>{item.assigned}</td>
                  <td>{item.hearing}</td>
                  <td>
                    <span
                      className={`badge ${
                        item.status === "New"
                          ? "bg-primary"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-primary">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssignedCases;
