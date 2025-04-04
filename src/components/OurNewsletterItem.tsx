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
        position: "relative",
      }}
    >
      <div className="cardImgWrapper">
        <img src={img} alt={title} />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
      <div style={{ position: "absolute", bottom: "8px" }}>
        <a href="">{link}</a>
      </div>
    </div>
  );
};

export default OurNewsletterItem;
