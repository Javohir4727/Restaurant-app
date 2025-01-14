import React, { useState } from "react";
import OurRestaurantVideoWrapper from "./OurRestaurantVideo";
import BlackBackground from "components/BlackBackground";
import { Title, Description } from "./OurRestaurantVideo";
import ReactPlayer from "react-player";
import video from "./video/6011739_Person_People_3840x2160.mp4";
import { Box, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import WhyChooseUs from "components/WhyChooseUs";
import WeekendOffers from "components/WeekendOffers";
import OurChef from "components/OurChef";
import Reviews from "..//..//components/Reviews/index";
import FavouriteMenu from "components/FavouriteMenu";
import GTASection from "components/GTASection/GTASection";
import Footer from "components/Footer/Footer";

const AboutPage: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handlePlayClick = () => {
    setPlaying(!playing);
  };

  return (
    <>
      <header>
        <BlackBackground title="About Us" />
      </header>
      <OurRestaurantVideoWrapper>
        <div className="title">
          <Title>
            Our Restaurant has been present for 10 years in the market
          </Title>
          <Description>
            Amet minim mollit non desrunt ullamco est sit aliqua dolor do amet
            sint velit officia consequat duis enim velit mollit Exercitation
            veniam consequat sunt nostrud amet
          </Description>
        </div>
        <div className="video-container">
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "auto",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <ReactPlayer
              loop={true}
              url={video}
              playing={playing}
              controls={false}
              width="100%"
              height="auto"
            />
            <IconButton
              onClick={handlePlayClick}
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 80,
                height: 80,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                borderRadius: "50%",
                display: hovered || !playing ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {playing ? (
                <PauseIcon sx={{ fontSize: 40, color: "black" }} />
              ) : (
                <PlayArrowIcon sx={{ fontSize: 40, color: "black" }} />
              )}
            </IconButton>
          </Box>
        </div>
      </OurRestaurantVideoWrapper>
      <WhyChooseUs />
      <WeekendOffers />
      <OurChef />
      <FavouriteMenu />
      <Reviews />
      <GTASection />
      <Footer />
    </>
  );
};

export default AboutPage;
