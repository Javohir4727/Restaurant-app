import React from "react";

type Props = {
  img: string;
  title: string;
  description: string;
  className?: string;
};

function WhyChooseUsItem({ img, title, description, className }: Props) {
  return (
    <div className={`contentWrapper  ${className || ""}`}>
      <div className="iconStyle">
        <img src={img} alt="Icon" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default WhyChooseUsItem;
