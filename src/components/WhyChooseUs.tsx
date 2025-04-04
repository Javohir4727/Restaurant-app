import React from "react";
import styled from "styled-components";
import ChefIcon from "..//media/Icon.svg";
import FoodIcon from "..//media/Icon (1).svg";
import Vegetabilies from "..//media/Icon (2).svg";
import WhyChooseUsItem from "./WhyChooseUsItem";

const HighlightsWrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  /* gap: 2rem; */

  .contentWrapper {
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .iconStyle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      background-color: rgba(34, 34, 34, 1);
      margin: 0 auto;
      margin-bottom: 2rem;
    }

    img {
      width: 1.5rem;
      height: 1.5rem;
    }

    h3 {
      font-family: Playfair Display;
      font-size: 1.7rem;
      color: rgba(34, 34, 34, 1);
      font-weight: 700;
      margin: 0 auto;
      line-height: 1.5rem;
    }

    p {
      color: rgba(133, 133, 133, 1);
      line-height: 1%.5;
    }
  }

  .contentWrapperBottom {
    margin-top: 4rem;
  }
`;

function WhyChooseUs() {
  return (
    <div
      className="whyChooseUsWrapper"
      style={{
        textAlign: "center",
        marginTop: "10rem",
      }}
    >
      <h2
        style={{
          fontFamily: "Playfair Display",
          fontWeight: "700",
          fontSize: "3rem",
          color: " rgba(34, 34, 34, 1)",
        }}
      >
        Why People Choose Us
      </h2>
      <HighlightsWrapper>
        <WhyChooseUsItem
          img={Vegetabilies}
          title="Always Fresh Ingredient"
          description=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint."
        />
        <WhyChooseUsItem
          img={ChefIcon}
          title="Specialist Chef"
          description=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint."
          className="contentWrapperBottom"
        />
        <WhyChooseUsItem
          img={FoodIcon}
          title="Menu for every taste"
          description=" Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint."
        />
      </HighlightsWrapper>
    </div>
  );
}

export default WhyChooseUs;
