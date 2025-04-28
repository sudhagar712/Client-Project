import React from "react";
import {
  FileEarmarkText,
  Envelope,
  CalendarEvent,
  HouseDoor
} from "react-bootstrap-icons";

const cards = [
  {
    title: "Active Cases",
    count: 12,
    icon: <FileEarmarkText size={24} className="text-primary" />
  },
  {
    title: "New Assignments",
    count: 3,
    icon: <Envelope size={24} className="text-success" />
  },
  {
    title: "Upcoming Hearings",
    count: 5,
    icon: <CalendarEvent size={24} className="text-warning" />
  },
  {
    title: "Resolved Cases",
    count: 24,
    icon: <HouseDoor size={24} className="text-primary" />
  }
];

const OverviewCards = () => {
  return (
    <div className="row g-4 mb-4" >
      {cards.map((card, index) => (
        <div key={index} className="col-12 col-sm-6 col-lg-3">
          <div className="card h-100 shadow-sm">
            <div className="card-body d-flex align-items-center gap-3">
              <div className="p-2 bg-light rounded-circle">{card.icon}</div>
              <div>
                <small className="text-muted">{card.title}</small>
                <h4 className="m-0">{card.count}</h4>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;
