import React from "react";
import styled from "styled-components";
import Chef1 from "..//media/Chef Simmons.jpg";
import Chef2 from "..//media/Chef Robert.jpg";
import Chef3 from "..//media/Chef Cameron.jpg";
import FacebookIcon from "..//media/FB.jpg";
import InstaIcon from "..//media/IG.jpg";
import WhatsappIcon from "..//media/WA.jpg";

type Props = {};

const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  .wrapContents {
    text-align: center;
    img {
      max-width: 300px;
    }

    h4 {
      font-family: Playfair Display;
      font-weight: 700;
      font-size: 2rem;
      margin: 0 auto;
      margin-top: 1rem;
    }
    p {
      color: rgba(133, 133, 133, 1);
      margin: 0 auto;
      margin-top: 0.6rem;
    }
    a {
      width: 24px;
      margin: 0 6px;

      img {
        margin-top: 0.6rem;
        width: 2rem;
      }
    }
  }
`;

function OurChef({}: Props) {
  return (
    <div className="sectionContainer">
      <h3
        style={{
          fontFamily: "Playfair Display",
          fontWeight: "700",
          fontSize: "3rem",
          lineHeight: "4rem",
          textAlign: "center",
        }}
      >
        Meet Our Master Chef
      </h3>
      <WrapperContent>
        <div className="wrapContents">
          <img src={Chef1} alt="Our Chef" />
          <h4>Brooklyn Simmons</h4>
          <p>Master Chef</p>
          <a href="#">
            <img src={FacebookIcon} alt="facebook icon" />
          </a>
          <a href="#">
            <img src={InstaIcon} alt="instagram icon" />
          </a>
          <a href="#">
            <img src={WhatsappIcon} alt="whatsapp icon" />
          </a>
        </div>
        <div className="wrapContents">
          <img src={Chef2} alt="Our Chef" />
          <h4>Robert Hawkins</h4>
          <p>Master Chef</p>
          <a href="#">
            <img src={FacebookIcon} alt="facebook icon" />
          </a>
          <a href="#">
            <img src={InstaIcon} alt="instagram icon" />
          </a>
          <a href="#">
            <img src={WhatsappIcon} alt="whatsapp icon" />
          </a>
        </div>
        <div className="wrapContents">
          <img src={Chef3} alt="Our Chef" />
          <h4>Cameron Williamson</h4>
          <p>Master Chef</p>
          <a href="#">
            <img src={FacebookIcon} alt="facebook icon" />
          </a>
          <a href="#">
            <img src={InstaIcon} alt="instagram icon" />
          </a>
          <a href="#">
            <img src={WhatsappIcon} alt="whatsapp icon" />
          </a>
        </div>
      </WrapperContent>
    </div>
  );
}

export default OurChef;
