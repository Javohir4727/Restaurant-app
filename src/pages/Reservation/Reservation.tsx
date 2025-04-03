import React from "react";
import BlackBackground from "components/BlackBackground";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { inputBaseClasses } from "@mui/material/InputBase";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";
import Button from "@mui/material/Button";
import Footer from "components/Footer/Footer";
import GTASection from "components/GTASection/GTASection";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  MapWrapper,
  ContacInfoWrapper,
  ContactInfoTitle,
  ContactIconsWrapper,
  IconBox,
} from "..//Contact/ContactStyle";

function Reservation() {
  return (
    <div>
      <Box>
        <BlackBackground title="Reservation" />
      </Box>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: "900px",
            backgroundColor: "rgba(250, 250, 250, 1)",
            height: "500px",
            marginTop: 8,
            padding: 0,
            marginBottom: 30,
          }}
        >
          <Typography
            style={{
              color: "rgba(34, 34, 34, 1)",
              marginTop: 50,
              textAlign: "center",
              fontFamily: "Playfair Display",
              fontSize: "48px",
              fontWeight: "700",
            }}
          >
            {" "}
            Book a Table
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              marginTop: 6,
            }}
          >
            <TextField
              sx={{
                width: "400px",
                marginBottom: 4,
              }}
              id="outlined-basic"
              label="Enter Your Name"
              variant="outlined"
              required
            />
            <TextField
              sx={{
                width: "400px",
              }}
              id="standard-suffix-shrink"
              variant="outlined"
              required
              label="Enter Your Email"
              slotProps={{
                htmlInput: {
                  sx: { textAlign: "right" },
                },
                input: {
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      sx={{
                        alignSelf: "flex-end",
                        margin: 0,
                        marginBottom: "5px",
                        opacity: 0,
                        pointerEvents: "none",
                        [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]:
                          {
                            opacity: 1,
                          },
                      }}
                    >
                      @gmail.com
                    </InputAdornment>
                  ),
                },
              }}
            />
            <TextField
              sx={{
                marginBottom: 4,
                width: "400px",
              }}
              id="outlined-basic"
              label="Enter Your Phone"
              variant="outlined"
              type="number"
              required
            />
            <FormControl>
              <InputLabel id="demo-simple-select-label">
                Select Person
              </InputLabel>
              <Select
                sx={{ width: "400px" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select Person"
                className="input"
              >
                <MenuItem value="person1">1 Person</MenuItem>
                <MenuItem value="person2">2 Person</MenuItem>
                <MenuItem value="person3">3 Person</MenuItem>
                <MenuItem value="person4">4 Person</MenuItem>
                <MenuItem value="person5">5+ Person</MenuItem>
              </Select>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DatePicker"]}
                sx={{ marginBottom: 4 }}
              >
                <DatePicker
                  label="Basic date picker"
                  sx={{
                    width: "400px",
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker"]}>
                <TimePicker
                  label="Basic time picker"
                  sx={{
                    width: "400px",
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>

            <TextField
              label="message"
              id="fullWidth"
              rows={6}
              multiline
              sx={{ width: "850px" }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "rgba(248, 189, 73, 1)",
                color: "black",
                marginTop: 4,
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </div>
      <ContacInfoWrapper style={{ marginBottom: 20 }}>
        <ContactInfoTitle>Contact Information</ContactInfoTitle>
        <ContactIconsWrapper>
          <IconBox style={{ border: "none" }}>
            <MailOutlineIcon style={{ fontSize: "50px" }} />
            <h6>Email Us</h6>
            <p>your.email.inbox@here.com</p>
          </IconBox>
          <IconBox style={{ border: "none" }}>
            <LocationOnIcon style={{ fontSize: "50px" }} />
            <h6>Visit Us</h6>
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
          </IconBox>
          <IconBox style={{ border: "none" }}>
            <CallIcon style={{ fontSize: "50px" }} />
            <h6>Contact Us</h6>
            <p>+62 424 954 824</p>
          </IconBox>
        </ContactIconsWrapper>
      </ContacInfoWrapper>
      <GTASection />
      <Footer />
    </div>
  );
}

export default Reservation;
