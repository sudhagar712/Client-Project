import React from "react";

const SummaryCards = () => {
  const cards = [
    {
      title: "Total Complaints",
      count: 128,
      icon: "bi bi-file-earmark-text",
      color: "primary"
    },
    {
      title: "New Complaints",
      count: 24,
      icon: "bi bi-inbox",
      color: "success"
    },
    {
      title: "Registered Lawyers",
      count: 42,
      icon: "bi bi-person-circle",
      color: "warning"
    },
    { title: "Resolved Cases", count: 86, icon: "bi bi-house", color: "info" }
  ];

  return (
    <div className="container my-4">
      <div className="row g-3">
        {cards.map((card, index) => (
          <div className="col-6 col-md-3" key={index}>
            <div className="card text-center shadow-sm">
              <div className="card-body">
                <i className={`${card.icon} text-${card.color} fs-1`}></i>
                <h5 className="card-title mt-2">{card.count}</h5>
                <p className="card-text">{card.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryCards;
