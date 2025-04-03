import React from "react";
import BlackBackground from "components/BlackBackground";

import {
  MapWrapper,
  ContacInfoWrapper,
  ContactInfoTitle,
  ContactIconsWrapper,
  IconBox,
} from "./ContactStyle";
import MapImage from "./Basemap image.jpg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { InputContainer, InputWrapper } from "./InputsStyled";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import GTASection from "components/GTASection/GTASection";
import Footer from "components/Footer/Footer";

function Contact() {
  return (
    <>
      <BlackBackground title="Contact" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <MapWrapper>
          <img src={MapImage} alt="Map" />
        </MapWrapper>
      </div>
      <ContacInfoWrapper>
        <ContactInfoTitle>Contact Information</ContactInfoTitle>
        <ContactIconsWrapper>
          <IconBox>
            <MailOutlineIcon style={{ fontSize: "50px" }} />
            <h6>Email Us</h6>
            <p>your.email.inbox@here.com</p>
          </IconBox>
          <IconBox>
            <LocationOnIcon style={{ fontSize: "50px" }} />
            <h6>Visit Us</h6>
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
          </IconBox>
          <IconBox>
            <CallIcon style={{ fontSize: "50px" }} />
            <h6>Contact Us</h6>
            <p>+62 424 954 824</p>
          </IconBox>
        </ContactIconsWrapper>
      </ContacInfoWrapper>
      <InputContainer>
        <h4>Write us a Message</h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <InputWrapper>
            <div style={{ marginTop: "40px" }}>
              <TextField
                required
                id="outlined-required"
                label="Enter Your First Name"
                className="input"
              />
            </div>
            <div style={{ marginTop: "40px" }}>
              <TextField
                required
                id="outlined-required"
                label="Enter Your Last Name"
                className="input"
              />
            </div>
            <div>
              <TextField
                required
                id="outlined-required"
                type="number"
                label="Enter Your Phone"
                className="input"
              />
            </div>
            <div>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Person
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Select Person"
                  className="input"
                >
                  <MenuItem value="feedback">Feedback</MenuItem>
                  <MenuItem value="Complaint">Complaint</MenuItem>
                  <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                  <MenuItem value="Customer Support">Customer Support</MenuItem>
                </Select>
              </FormControl>
            </div>
          </InputWrapper>
        </div>
        <div>
          <TextField
            required
            id="outlined-required"
            label="Message"
            className="text"
            multiline
            rows={6}
          />
        </div>
        <div style={{ margin: "40px 0" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "rgba(248, 189, 73, 1)",
              color: "black",
              fontWeight: "500",
              fontSize: "16px",
              textTransform: "none",
            }}
          >
            Send a Message
          </Button>
        </div>
      </InputContainer>
      <GTASection />
      <Footer />
    </>
type Props = {};

function Contact({}: Props) {
  return (
    <div>
      <BlackBackground title="Contact" />
    </div>
  );
}

export default Contact;
