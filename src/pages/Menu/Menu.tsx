import React from "react";
import MenuContainer from "./MenuStyled";
import BlackBackground from "components/BlackBackground";
import {
  ChooseMenuWrapper,
  Title,
  Button,
  ButtonWrapper,
  MenuImgWrapper,
  MenuWrapper,
} from "./MenuStyled";
import MENU_REVIEWS_MOCS from "./mocs/MenuReviews";
import WeekendOffers from "components/WeekendOffers";
import FavouriteMenu from "components/FavouriteMenu";
import GTASection from "components/GTASection/GTASection";
import Footer from "components/Footer/Footer";

function Menu() {
  return (
    <>
      <BlackBackground title="Menu" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <MenuContainer>
          <ChooseMenuWrapper>
            <Title>Choose Your Menu</Title>
            <ButtonWrapper>
              <Button>Brunch</Button>
              <Button>Lunch</Button>
              <Button>Dinner</Button>
            </ButtonWrapper>
          </ChooseMenuWrapper>
          <MenuWrapper>
            {MENU_REVIEWS_MOCS.map((item) => (
              <MenuImgWrapper>
                <img src={item.img} alt="food" />

                <h6>
                  {item.title}
                  <p>
                    $<span>12</span>
                  </p>
                </h6>
                <p>{item.description}</p>
              </MenuImgWrapper>
            ))}
          </MenuWrapper>
        </MenuContainer>
        <WeekendOffers />
        <FavouriteMenu />
        <GTASection />
        <Footer />
      </div>
    </>
  );
}

export default Menu;
