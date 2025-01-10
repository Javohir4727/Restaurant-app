import React from "react";
import "./Index.css";
import styled from "styled-components";
import BackgroundImage from "..//..//media/background_reservation.jpg";
import ReserveTableImage from "..//..//media/ReserveTable.jpg";
import WhyChooseUs from "components/WhyChooseUs";
import OurChef from "components/OurChef";
import { ReservBtn } from "components/Button";
import WeekendOffers from "..//..//components/WeekendOffers";
import FavouriteMenu from "..//..//components/FavouriteMenu";
import OurNewsletter from "components/OurNewsletter";
import OurCustomersSay from "components/Reviews";
import GTASection from "..//..//components/GTASection/GTASection";
import Footer from "..//..//components/Footer/Footer";
import Header from "components/Header";

type Props = {};

const ReservationSection = styled.div`
  display: flex;
  justify-content: start;
  color: rgba(255, 255, 255, 1);
  font-family: Playfair Display;
  height: 100vh;
  width: 100%;

  .backgroundImage {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: no-repeat center;
    background-size: cover;
    width: 100%;
  }
`;

const WrapperReservationContent = styled.div`
  max-width: 400px;
  overflow: hidden;
  margin: 5rem 0 0 4rem;
`;

const ReservContentWelcomeP = styled.p`
  font-weight: 500;
  font-size: 2rem;
  line-height: 1.5rem;
`;

const ReservContentTitle = styled.h1`
  font-size: 4rem;
  line-height: 5rem;
`;
const ReservContentDiscription = styled.p`
  font-family: DM Sans;
  line-height: 1.5rem;
`;

const Container = styled.div``;

const ReserveTable = styled.div`
  display: flex;
  justify-content: center;
  gap: 6rem;
  align-items: center;
  width: 100%;
  margin-top: 6rem;

  .discReserveBtn{
    background-color: rgba(248, 189, 73, 1);
    border: 1px solid rgba(248, 189, 73, 1);
    color: black;
      
    }
  }
  .reserveImageWrapper {
    img {
      width: 400px;
    }
  }
  .reservaImageDiscr {
    max-width: 350px;

    h2 {
      font-size: 2rem;
      font-family: Playfair Display;
    }

    p {
      color: rgba(133, 133, 133, 1);
    }
    .reserveContentBtn {
      padding: 1rem 1rem;
      font-size: 1rem;
    }
  
`;
const HomePage = (props: Props) => {
  return (
    <Container>
      <Header />
      <ReservationSection>
        <img
          src={BackgroundImage}
          alt="Background"
          className="backgroundImage"
        />
        <WrapperReservationContent>
          <ReservContentWelcomeP>Welcome Back to</ReservContentWelcomeP>
          <ReservContentTitle>
            Book Your <br />
            Table Today
          </ReservContentTitle>
          <ReservContentDiscription>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
            beatae quidem vel odio quae sit velit harum veniam. Maiores,
            voluptatum.
          </ReservContentDiscription>
          <ReservBtn> Reservation </ReservBtn>
        </WrapperReservationContent>
      </ReservationSection>
      <ReserveTable>
        <div className="reserveImageWrapper">
          <img src={ReserveTableImage} alt="reserveTable" />
        </div>
        <div className="reservaImageDiscr">
          <h2>Discover and Reserve Your Table with Special Menu Every Day</h2>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <ReservBtn className="reserveContentBtn discReserveBtn">
            Reservation
          </ReservBtn>
        </div>
      </ReserveTable>
      <WhyChooseUs />
      <OurChef />
      <WeekendOffers />
      <FavouriteMenu />
      <OurNewsletter />
      <OurCustomersSay />
      <GTASection />
      <Footer />
    </Container>
  );
};

export default HomePage;
