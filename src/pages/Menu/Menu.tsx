
import React, { useEffect, useState } from "react";
import BlackBackground from "components/BlackBackground";
import {
  ChooseMenuWrapper,
  Typography,
  MenuImgWrapper,
  MenuWrapper,
} from "./MenuStyled";

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

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { supabase } from "utils/supabase";
import { Container, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  img: string;
  title: string;
  description: string;
  price: number;
  id: number;
  category: string;
}

function Menu() {
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("menuItem").select("*");
      if (error) throw error;
      setMenuItems(data || []);
    } catch (error) {
      console.error("Ma'lumotni olishda xatolik:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredMenu = (category: string) =>
    menuItems.filter((item) => item.category === category);

  const renderMenuItems = (category: string) => (
    <MenuWrapper>
      {filteredMenu(category).map((item) => (
        <MenuImgWrapper
          key={item.id}
          onClick={() => navigate(`/ProductDetail/${item.id}`)}
        >
          <img src={item.img} alt={item.title} />
          <h6>
            {item.title.split(" ").slice(0, 3).join(" ") +
              (item.title.split(" ").length > 3 ? "..." : "")}
            <p>
              $<span>{item.price}</span>
            </p>
          </h6>
          <p
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {item.description}
          </p>
        </MenuImgWrapper>
      ))}
    </MenuWrapper>
  );

  return (
    <Stack>
      <BlackBackground title="Menu" />
      <Container>
        <Stack sx={{ display: "flex", alignItems: "center" }}>
          <Typography>Choose Your Menu</Typography>
          <ChooseMenuWrapper>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Tabs
                value={value}
                onChange={(e, newValue) => setValue(newValue)}
                sx={{
                  "& .MuiTab-root": { textTransform: "none" },
                  "& .Mui-selected": {
                    color: "black !important",
                    border: "1px solid transparent",
                    backgroundColor: "rgba(248, 189, 73, 1)",
                  },
                  "& .MuiTabs-indicator": { display: "none" },
                }}
              >
                <Tab
                  label="Brunch"
                  sx={{ border: "1px solid black", borderRadius: "6px" }}
                />
                <Tab
                  label="Lunch"
                  sx={{
                    border: "1px solid black",
                    borderRadius: "6px",
                    margin: "0 20px",
                  }}
                />
                <Tab
                  label="Dinner"
                  sx={{ border: "1px solid black", borderRadius: "6px" }}
                />
              </Tabs>
            </Box>
            <Box sx={{ width: "100%" }}>
              {value === 0 && renderMenuItems("Breakfast")}
              {value === 1 && renderMenuItems("Lunch")}
              {value === 2 && renderMenuItems("Dinner")}
            </Box>
          </ChooseMenuWrapper>
        </Stack>


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
                <img src={item.img} alt="" />

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
      </Container>
    </Stack>
      </div>
    </>
  );
}

export default Menu;
