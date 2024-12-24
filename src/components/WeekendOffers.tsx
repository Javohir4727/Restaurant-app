import React from "react";
import styled from "styled-components";
import Background from "..//media/WeekendOffersB-g.jpg";
import FoodImage from "..//media/Image (1).svg";
import { ReservBtn } from "..///components/Button";

type Props = {};

const WrapperOffers = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 5rem;
  align-items: center;
  width: 1100px;
  height: 500px;
  border-radius: 40px;
  margin-top: 8rem;
  background-color: rgba(0, 0, 0, 0.8);

  .bgImage {
    position: absolute;
    max-width: 100%;
    height: 100%;
    border-radius: 40px;
    z-index: -1;
  }

  .offersContent {
    width: 450px;
    overflow: hidden;

    h3 {
      color: rgba(255, 255, 255, 1);
      font-family: Playfair Display;
      font-weight: 700;
      line-height: 4rem;
      font-size: 3rem;
      margin: 0 auto;
    }

    p {
      color: rgba(255, 255, 255, 1);
    }

    .btns {
      padding: 12px 26px;
      font-weight: 500;
      margin: 0 1rem 0 0;
    }
  }

  .offersImage {
    width: 450;

    img {
      width: 350px;
      object-fit: cover;
      height: auto;
    }
  }
`;

function WeekendOffers({}: Props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <WrapperOffers>
        <img src={Background} alt="background" className="bgImage" />
        <div className="offersContent">
          <h3>Get Up to 80% Offer On This Weekend</h3>
          <p>
            Amet minim molit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt n
          </p>
          <ReservBtn className="btns">Reservation</ReservBtn>
          <ReservBtn className="btns">Get in Touch</ReservBtn>
        </div>
        <div className="offersImage">
          <img src={FoodImage} alt="food" />
        </div>
      </WrapperOffers>
    </div>
  );
}

export default WeekendOffers;
