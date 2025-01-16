import * as React from "react";
import FootersHeaderWrapper from "./FootersHeader.style";
import FooterContentWrapper from "./FooterContent.style";
import Logo from "./icon/RestoQ.png";
import WhatsAppIcon from "./icon/Vector (1).png";
import FacebookIcon from "./icon/Vector.png";
import InstagrammIcon from "./icon/Union.png";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import Image1 from "./img/Image (9).jpg";
import Image2 from "./img/Image (10).jpg";
import Image3 from "./img/Image (11).jpg";
import Image4 from "./img/Image (12).jpg";

function Footer() {
  const navigate = useNavigate();
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div>
      <FootersHeaderWrapper>
        <header>
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="iconWrapper">
            <img src={FacebookIcon} alt="facebook" />
            <img src={InstagrammIcon} alt="instagram" />
            <img src={WhatsAppIcon} alt="whatsapp" />
          </div>
        </header>
      </FootersHeaderWrapper>
      <FooterContentWrapper>
        {/* Contact Section */}
        <div className="elementWrapper contactWrapper">
          <List className="elementWrapper" sx={{ bgcolor: "background.paper" }}>
            <ListItem className="listItem">
              <h4>Contact</h4>
            </ListItem>
            <ListItem className="listItem">
              <ListItemAvatar>
                <CallIcon className="contactIcon" />
              </ListItemAvatar>
              <ListItemText
                primary="+62 424 954 824"
                className="contactText"
                slotProps={{
                  primary: { sx: { fontSize: 12, lineHeight: 2 } },
                }}
              />
            </ListItem>
            <ListItem className="listItem">
              <ListItemAvatar>
                <EmailIcon className="contactIcon" />
              </ListItemAvatar>
              <ListItemText
                primary="your.email.inbox@here.com"
                className="contactText"
                slotProps={{
                  primary: { sx: { fontSize: 12, lineHeight: 2 } },
                }}
              />
            </ListItem>
            <ListItem className="listItem">
              <ListItemAvatar>
                <PlaceIcon className="contactIcon" />
              </ListItemAvatar>
              <ListItemText
                primary="4517 Washington Ave. Manchester, Kentucky 39495"
                className="contactText"
                slotProps={{
                  primary: { sx: { fontSize: 12, lineHeight: 2 } },
                }}
              />
            </ListItem>
          </List>
        </div>

        <div className="elementWrapper">
          <List
            className="elementWrapper"
            sx={{ width: "100%", bgcolor: "background.paper" }}
          >
            <ListItem className="listItem">
              <h4>About Us</h4>
            </ListItem>
            <ListItemText
              primary="     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dicta
            molestiae, quibusdam quasi veniam repudiandae recusandae rem impedit
            hic, libero at. Sunt, dicta?"
              className="contactText"
              slotProps={{
                primary: { sx: { fontSize: 12, lineHeight: 2 } },
              }}
            />
          </List>
        </div>
        <div className="elementWrapper">
          <List
            className="elementWrapper"
            sx={{ width: "100%", bgcolor: "background.paper" }}
          >
            <ListItem className="listItem">
              <h4>Quicklink</h4>
            </ListItem>

            <ListItemText
              onClick={() => navigate("/")}
              primary="Home"
              slotProps={{
                primary: {
                  sx: {
                    fontSize: "12px",
                    color: "rgba(133, 133, 133, 1)",
                    cursor: "pointer",
                  },
                },
              }}
            />
            <ListItemText
              onClick={() => navigate("/about")}
              primary="About Us"
              slotProps={{
                primary: {
                  sx: {
                    fontSize: "12px",
                    color: "rgba(133, 133, 133, 1)",
                    cursor: "pointer",
                    marginTop: "12px",
                  },
                },
              }}
            />
            <ListItemText
              primary="Booking"
              slotProps={{
                primary: {
                  sx: {
                    fontSize: "12px",
                    color: "rgba(133, 133, 133, 1)",
                    cursor: "pointer",
                    marginTop: "12px",
                  },
                },
              }}
            />
            <ListItemText
              onClick={() => navigate("/menu")}
              primary="Menu"
              slotProps={{
                primary: {
                  sx: {
                    fontSize: "12px",
                    color: "rgba(133, 133, 133, 1)",
                    cursor: "pointer",
                    marginTop: "12px",
                  },
                },
              }}
            />
          </List>
        </div>

        {/* Gallery Section */}
        <div className="elementWrapper gallery">
          <div className="galleryHeader">
            <ListItem className="listItem listItemHot">
              <h4>Gallery</h4>
              <a href="#" style={{ cursor: "pointer" }}>
                SEE MORE
              </a>
            </ListItem>
          </div>
          <div className="slider-container">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={4}
              spaceBetween={30}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                clickable: true,
                bulletClass: "none",
              }}
              onBeforeInit={(swiper: any) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
            >
              <SwiperSlide>
                <img src={Image1} alt="food" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Image2} alt="food" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Image3} alt="food" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Image4} alt="food" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Image1} alt="food" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Image2} alt="food" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Image3} alt="food" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={Image4} alt="food" />
              </SwiperSlide>

              <div className="slider-controls">
                <WestIcon
                  className="swiper-button-prev"
                  ref={navigationPrevRef}
                  style={{
                    color: "rgba(34, 34, 34, 1)",
                    cursor: "pointer",
                  }}
                />
                <EastIcon
                  className="swiper-button-next"
                  ref={navigationNextRef}
                  style={{
                    color: "rgba(34, 34, 34, 1)",
                    cursor: "pointer",
                  }}
                />
              </div>
            </Swiper>
          </div>
        </div>
      </FooterContentWrapper>
      <div
        style={{
          textAlign: "center",
          fontSize: "12px",
          color: "rgba(133, 133, 133, 1)",
          marginTop: "20px",
        }}
      >
        <p>Copyright Vagency, 2021 All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
