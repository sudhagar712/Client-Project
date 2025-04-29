import React from "react";

const ReviewCard = ({ name, image, rating, review }) => {
  return (
    <div className="card shadow-sm p-3 border-0 h-100">
      <div className="d-flex align-items-center mb-2">
        <img
          src={image}
          alt={name}
          className="rounded"
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        />
        <div className="ms-3">
          <h6 className="mb-0 fw-bold">{name}</h6>
          <div className="text-warning">
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
          </div>
        </div>
      </div>
      <p className="text-muted mb-0">“{review}”</p>
    </div>
  );
};

export default ReviewCard;
