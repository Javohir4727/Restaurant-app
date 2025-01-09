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
import Image1 from "./img/Image (9).jpg";
import Image2 from "./img/Image (10).jpg";
import Image3 from "./img/Image (11).jpg";
import Image4 from "./img/Image (12).jpg";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      <FootersHeaderWrapper>
        <header>
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="iconWrapper">
            <img src={FacebookIcon} alt="facebook" />
            <img src={InstagrammIcon} alt="instagramm" />
            <img src={WhatsAppIcon} alt="whatsapp" />
          </div>
        </header>
      </FootersHeaderWrapper>
      <FooterContentWrapper>
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
              onClick={() => navigate("/home")}
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
              onClick={() => navigate("/aboutus")}
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
        <div className="elementWrapper gallery">
          <div className="galleryHeader">
            <ListItem className="listItem listItemHot">
              <h4>Gallery</h4>
              <a href="#" style={{ cursor: "pointer" }}>
                SEE MORE
              </a>
            </ListItem>
          </div>
          <div>
            <div>
              <img src={Image1} alt="food" />
            </div>
            <div>
              <img src={Image2} alt="food" />
            </div>
            <div>
              <img src={Image3} alt="food" />
            </div>
            <div>
              <img src={Image4} alt="food" />
            </div>
          </div>
          <div>
            <WestIcon style={{ marginTop: "10px", cursor: "pointer" }} />
            <EastIcon style={{ marginTop: "10px", cursor: "pointer" }} />
          </div>
        </div>
      </FooterContentWrapper>
    </div>
  );
}

export default Footer;
