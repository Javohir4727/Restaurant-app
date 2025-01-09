import React from "react";
import BackgroundImg from "./Image (9).jpg";
import GTASectionStyle from "./GTASectionStyle";

type Props = {};

function GTASection({}: Props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "60vh",
      }}
    >
      <GTASectionStyle>
        <h3>Subscribe Our Newsletter</h3>
        <p>Amet minim molit non ulllamco est sit aliqua dolor do amet sint.</p>
        <img src={BackgroundImg} alt="BackgroundImage" />
        <div>
          <input type="email" placeholder="Enter Your Email Here" />
          <button>Subscribe</button>
        </div>
      </GTASectionStyle>
    </div>
  );
}

export default GTASection;
