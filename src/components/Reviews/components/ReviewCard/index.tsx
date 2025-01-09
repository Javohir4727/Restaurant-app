import React from "react";
import { StyledReviewCard } from "./ReviewCard.style";

type Props = {
  title: string;
  description: string;
  img: string;
  userInfo: string;
};

const ReviewCard = ({ title, description, img, userInfo }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <StyledReviewCard>
        <div>
          <h6>{title}</h6>
          <p>{description}</p>
          <img src={img} alt="" />
          <p>{userInfo}</p>
        </div>
      </StyledReviewCard>
    </div>
  );
};

export default ReviewCard;
