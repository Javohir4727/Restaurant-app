import React from "react";
import BlackBackground from "components/BlackBackground";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Container,
  TitleNewsletter,
  ContentWrapper,
  ContentsMenuWrapper,
  SwipperButton,
} from "./NewsStyled";
import NEWSLETTER_MENU_MOCS from "./mocs/NewsletterMocs";
import GTASection from "components/GTASection/GTASection";
import Footer from "components/Footer/Footer";

function News() {
  return (
    <>
      <BlackBackground title="Newsletter" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container>
          <TitleNewsletter>Welcome to Our Newsletter</TitleNewsletter>
          <ContentsMenuWrapper>
            {NEWSLETTER_MENU_MOCS.map((review) => (
              <ContentWrapper>
                <img src={review.img} alt="food" />
                <h6>{review.title}</h6>
                <p>{review.description}</p>
                <a href="#">
                  {review.link} <ArrowForwardIcon />
                </a>
              </ContentWrapper>
            ))}
          </ContentsMenuWrapper>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              margin: "30px 0 70px",
            }}
          >
            <SwipperButton>1</SwipperButton>
            <SwipperButton>2</SwipperButton>
            <SwipperButton>3</SwipperButton>
          </div>
        </Container>
      </div>
      <GTASection />
      <Footer />
    </>
  );
}

export default News;
