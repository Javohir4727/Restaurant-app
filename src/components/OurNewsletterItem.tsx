import React from "react";

type Props = {
  img: string;
  title: string;
  description: string;
  link: string;
};

const OurNewsletterItem = ({ img, title, description, link }: Props) => {
  return (
    <div
      style={{
        width: "300px",
        overflow: "hidden",
        border: "1px solid rgba(217, 217, 217, 1)",
        padding: "12px",
        borderRadius: "10px",
      }}
    >
      <div className="cardImgWrapper">
        <img src={img} alt="food" />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <a href="">{link}</a>
    </div>
  );
};

export default OurNewsletterItem;
