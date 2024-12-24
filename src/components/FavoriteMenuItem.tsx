import React from "react";

type Props = {
  title: string;
  price: number;
  decription: string;
  img: string;
};

function FavoriteMenuItem({ decription, img, price, title }: Props) {
  return (
    <div className="menuContentWrapper">
      <img src={img} alt="food" />
      <div>
        <p>
          {title}
          <span>.........................</span>
          <span className="spanYellow">$</span>
          <span className="numberSpan">{price}</span>
        </p>
        <p>{decription}</p>
      </div>
    </div>
  );
}

export default FavoriteMenuItem;
