import React from "react";
import OurCustomersSaysItem from "./components/ReviewCard";

import CUSTUMENRS_REVIEWS_MOCS from "./mocs";
import { ReviewsWrapper } from "./Reviews.style";

const OurCustomersSay = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(250, 250, 250, 1)",
        marginTop: "12rem",
      }}
    >
      <h4
        style={{
          fontFamily: "Playfair Display",
          fontWeight: "700",
          lineHeight: "64px",
          fontSize: "48px",
          textAlign: "center",
        }}
      >
        What Our Customers Say
      </h4>
      <ReviewsWrapper>
        {CUSTUMENRS_REVIEWS_MOCS.map((review) => (
          <OurCustomersSaysItem
            title={review.title}
            description={review.description}
            img={review.img}
            userInfo={review.userInfo}
          ></OurCustomersSaysItem>
        ))}
      </ReviewsWrapper>
    </div>
  );
};

export default OurCustomersSay;
