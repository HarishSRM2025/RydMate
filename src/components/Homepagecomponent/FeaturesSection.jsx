import React from "react";
import "./FeaturesSection.css";
import offer5 from '../../assets/images/offer-icon5.png';
import offer2 from '../../assets/images/offer-icon2.png';
import offer3 from '../../assets/images/offer-icon3.png';
import offer4 from '../../assets/images/offer-icon4.png';
import offer6 from '../../assets/images/offer6.png';
import rupee from '../../assets/images/rupee.png';
const FeaturesSection = () => {
  const features = [
    {
      icon: rupee,
      title: "Best Price Guaranteed",
      desc: "A more recently with desktop softy like aldus page maker.",
    },
    {
      icon: offer2,
      title: "24/7 Customer Care",
      desc: "A more recently with desktop softy like aldus page maker.",
    },
    {
      icon: offer3,
      title: "Home Pickups",
      desc: "A more recently with desktop softy like aldus page maker.",
    },
    {
      icon: offer4,
      title: "Easy Bookings",
      desc: "A more recently with desktop softy like aldus page maker.",
    },
  ];

  return (
    <div className="container my-2 features-section">
      <div className="row justify-content-center text-center">
        {features.map((feature, index) => (
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
            <div className="feature-item text-center p-3">
              <img
                src={feature.icon}
                alt={feature.title}
                className="feature-icon mb-3"
              />
              <h5 className="fw-semibold">{feature.title}</h5>
              <p className="text-muted">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
