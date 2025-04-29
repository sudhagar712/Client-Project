import React from "react";
import ReviewCard from "./ReviewCard";


const reviews = [
  {
    name: "Sai Abhishek",
    image: "https://pbs.twimg.com/media/DP_YkeSUIAE9WCR.jpg:large",
    rating: 5,
    review:
      "Got the best legal advice from Vakilsearch for my startup. Their team was knowledgeable and responsive, and they helped me navigate complex legal issues with ease. Highly recommended"
  },
  {
    name: "Swetha",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWNbefvHjfQ8xiYBbYp5z_s3ZrBPsp4y7N6p1_-ZoQHNv_549-hEJ-XEhku9-ZHnFQaA8&usqp=CAU",
    rating: 5,
    review:
      "The lawyers are professional, diligent, and kept me informed throughout my property dispute case. I appreciated their hard work and would definitely recommend them to anyone in need of legal assistance"
  },
  {
    name: "Zoya Khan",
    image:
      "https://i.pinimg.com/736x/e6/04/39/e60439d7b091ddc924fb93241bceb545.jpg",
    rating: 5,
    review:
      "Lawyers from Vakilsearch really are the best. They helped me in drafting a legal notice and estate planning seamlessly. The team was patient, thorough, and provided practical advice tailored to my needs. Highly recommend their personalised service"
  }
];

const ReviewsSection = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#fff3cd" }}>
      <div className="container">
        <h1 className="display-1 container fw-bold mb-5 ">
          Clients <span className="text-warning">Reviews</span>
        </h1>
        <div className="row g-4">
          {reviews.map((review, idx) => (
            <div key={idx} className="col-12 col-md-6 col-lg-4">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
