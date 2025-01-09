import React from "react";
import styled from "styled-components";
import OurNewsletterItem from "./OurNewsletterItem";
import Img1 from "..//media/Image (9).jpg";
import Img2 from "..//media/Image (10).jpg";
import Img3 from "..//media/Image (11).jpg";
import { hover } from "@testing-library/user-event/dist/hover";

const newsLetterMenu = [
  {
    img: `${Img1}`,
    title: "Chicken Lettuce Wraps with Lime Drench",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
    link: "Read Full Article ",
  },
  {
    img: `${Img2}`,
    title: "Chicken Lettuce Wraps with Lime Drench",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
    link: "Read Full Article ",
  },
  {
    img: `${Img3}`,
    title: "Chicken Lettuce Wraps with Lime Drench",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
    link: "Read Full Article ",
  },
];

const OurMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  overflow: hidden;

  .cardImgWrapper {
    text-align: center;
    max-width: 330px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }

  h4 {
    font-size: 24px;
    font-family: Playfair Display;
    font-weight: 700;
    line-height: 32px;
    text-align: start;
    margin: 8px auto;
  }

  p {
    color: rgba(133, 133, 133, 1);
    line-height: 24px;
    font-size: 14px;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: rgba(248, 189, 73, 1);
    font-weight: 700;
    line-height: 24px;
  }
`;

function OurNewsletter() {
  return (
    <div
      style={{
        marginTop: "10rem",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          fontFamily: "Playfair Display",
          fontSize: "3rem",
        }}
      >
        Welcome to Our Newsletter
      </h3>
      <OurMenuWrapper>
        {newsLetterMenu.map((val, index) => (
          <OurNewsletterItem
            key={index}
            img={val.img}
            title={val.title}
            description={val.description}
            link={val.link}
          />
        ))}
      </OurMenuWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2rem auto",
        }}
      >
        <button
          style={{
            border: "1px solid rgba(34, 34, 34, 1)",
            background: "transparent",
            borderRadius: "8px",
            padding: "12px 24px",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          See all
        </button>
      </div>
    </div>
  );
}

export default OurNewsletter;
