import React from "react";
import { useEffect, useState } from "react";
import MenuContainer from "./MenuStyled";
import BlackBackground from "components/BlackBackground";
import {
  ChooseMenuWrapper,
  Typography,
  MenuImgWrapper,
  MenuWrapper,
} from "./MenuStyled";
import WeekendOffers from "components/WeekendOffers";
import FavouriteMenu from "components/FavouriteMenu";
import GTASection from "components/GTASection/GTASection";
import Footer from "components/Footer/Footer";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { supabase } from "utils/supabase";
import { Container, Stack } from "@mui/material";

interface menuBrunchRestaurant {
  img: string;
  title: string;
  description: string;
  price: number;
}

interface menuLunchRestaurant {
  img: string;
  title: string;
  description: string;
  price: number;
}

interface menuDinnerRestaurant {
  img: string;
  title: string;
  description: string;
  price: number;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 4 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Menu() {
  const [value, setValue] = React.useState(0);
  const [getDataBase, setDataBase] = useState<menuBrunchRestaurant[]>([]);
  const [getLaunchBase, setLaunchBase] = useState<menuLunchRestaurant[]>([]);
  const [getDinnerBase, setDinnerBase] = useState<menuDinnerRestaurant[]>([]);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("menuBrunch").select("*");

      setDataBase(data || []);
      if (error) {
        throw error;
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  const lunchData = async () => {
    try {
      const { data, error } = await supabase.from("menuLunch").select("*");

      setLaunchBase(data || []);
      if (error) {
        throw error;
      }
    } catch (error) {}
  };

  useEffect(() => {
    lunchData();
  }, []);

  const dinnerData = async () => {
    try {
      const { data, error } = await supabase.from("menuDinner").select("*");

      setDinnerBase(data || []);
      if (error) {
        throw error;
      }
    } catch (error) {}
  };

  useEffect(() => {
    dinnerData();
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Stack>
      <BlackBackground title="Menu" />

      <Container>
        <Stack
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography>Choose Your Menu</Typography>
          <ChooseMenuWrapper>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                sx={{
                  "& .MuiTab-root": {
                    textTransform: "none",
                  },
                  "& .Mui-selected": {
                    color: "black !important",
                    border: "1px solid transparent",
                    backgroundColor: "rgba(248, 189, 73, 1)",
                  },
                  "& .MuiTabs-indicator": {
                    display: "none",
                  },
                }}
              >
                <Tab
                  label="Brunch"
                  {...a11yProps(0)}
                  sx={{
                    border: "1px solid ",
                    borderRadius: "10px",
                    margin: "0 10px",
                  }}
                />
                <Tab
                  label="Lunch"
                  {...a11yProps(1)}
                  sx={{
                    border: "1px solid",
                    borderRadius: "10px",
                    margin: "0 10px",
                  }}
                />
                <Tab
                  label="Dinner"
                  {...a11yProps(2)}
                  sx={{
                    border: "1px solid",
                    borderRadius: "10px",
                    margin: "0 10px",
                  }}
                />
              </Tabs>
            </Box>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <CustomTabPanel value={value} index={0}>
                <MenuWrapper>
                  {getDataBase.map((item) => (
                    <MenuImgWrapper>
                      <img src={item.img} alt={item.title} />

                      <h6>
                        {item.title}
                        <p>
                          $<span>{item.price}</span>
                        </p>
                      </h6>

                      <p>{item.description}</p>
                    </MenuImgWrapper>
                  ))}
                </MenuWrapper>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={1}>
                <MenuWrapper>
                  {getLaunchBase.map((item) => (
                    <MenuImgWrapper>
                      <img src={item.img} alt={item.title} />
                      <h6>
                        {item.title}
                        <p>
                          $<span>{item.price}</span>
                        </p>
                      </h6>
                      <p>{item.description}</p>
                    </MenuImgWrapper>
                  ))}
                </MenuWrapper>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={2}>
                <MenuWrapper>
                  {getDinnerBase.map((item) => (
                    <MenuImgWrapper>
                      <img src={item.img} alt={item.title} />
                      <h6>
                        {item.title}
                        <p>
                          $<span>{item.price}</span>
                        </p>
                      </h6>
                      <p>{item.description}</p>
                    </MenuImgWrapper>
                  ))}
                </MenuWrapper>
              </CustomTabPanel>
            </Box>
          </ChooseMenuWrapper>
        </Stack>
        <WeekendOffers />
        <FavouriteMenu />
        <GTASection />
        <Footer />
      </Container>
    </Stack>
  );
}

export default Menu;
