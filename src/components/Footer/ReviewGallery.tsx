import React from "react";

type Props = {
  img: string;
};

const ReviewGallery = ({ img }: Props) => {
  return (
    <div>
      <img src={img} alt="food" />
    </div>
  );
};

export default ReviewGallery;
