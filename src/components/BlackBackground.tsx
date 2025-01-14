import React from "react";
import Header from "./Header";
import Imagebac from "./Imagebac.jpg";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type Props = {
  title: string;
};
const Wrapper = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("${Imagebac}");
  background-position: center;
  background-size: cover;
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const BlackBackground = ({ title }: Props) => {
  return (
    <div style={{ position: "relative" }}>
      <div>
        <p
          style={{
            color: "rgba(133, 133, 133, 1)",
            position: "absolute",
            lineHeight: "24px",
            top: "15vh",
            left: "8%",
            zIndex: "2",
          }}
        >
          Home
          <ArrowForwardIosIcon style={{ fontSize: "12px", color: "white" }} />
          <a
            href="#"
            style={{ color: "rgba(248, 189, 73, 1)", textDecoration: "none" }}
          >
            {title}
          </a>
        </p>
        <Header />
        <Wrapper>
          <div
            className="wrapperTitle"
            style={{
              textAlign: "center",
              position: "relative",
              zIndex: "1",
              maxWidth: "400px",
              width: "100%",
              color: "white",
            }}
          >
            <h1
              style={{
                fontFamily: "Playfair Display",
                fontWeight: "700",
                fontSize: "80px",
                marginBottom: "0",
              }}
            >
              {title}
            </h1>
            <p style={{ lineHeight: "24px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero et
              beatae asperiores sint?
            </p>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default BlackBackground;
