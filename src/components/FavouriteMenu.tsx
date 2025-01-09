import React from "react";
import styled from "styled-components";
import MenuImg1 from "..//media//favouriteMenu/Image (4).jpg";
import MenuImg2 from "..//media//favouriteMenu/Image (5).jpg";
import MenuImg3 from "..//media//favouriteMenu/Image (6).jpg";
import MenuImg4 from "..//media//favouriteMenu/Image (7).jpg";
import MenuImg5 from "..//media//favouriteMenu/Image (8).jpg";
import MenuImg6 from "..//media//favouriteMenu/Title & Desc.jpg";
import FavoriteMenuItem from "./FavoriteMenuItem";
import { title } from "process";

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 5rem;

  .menuContentWrapper {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 120px;
    }

    div {
      p {
        font-family: Playfair Display;
        font-weight: 700;
        font-size: 24px;
        margin: 0 auto;
        line-height: 32px;

        &:last-child {
          color: rgba(133, 133, 133, 1);
          font-size: 14px;
          font-weight: 400;
        }
        span {
          color: rgba(0, 0, 0, 0.2);
        }
      }

      span {
        &:first-child {
          font-size: 12px;
        }
      }
      .spanYellow {
        color: rgba(248, 189, 73, 1);
        font-size: 18px;
      }

      .numberSpan {
        font-size: 18px;
        color: black;
      }
    }
  }
`;

const favMenuItem = [
  {
    title: "Our Favourite Menu 1",
    description: "Amet minim mollit non deserunt ullamco",
    img: `${MenuImg1}`,
    price: 13,
  },
  {
    title: "Our Favourite Menu 3",
    description: "Amet minim mollit non deserunt ullamco",
    img: `${MenuImg2}`,
    price: 13,
  },
  {
    title: "Our Favourite Menu 2",
    description: "Amet minim mollit non deserunt ullamco",
    img: `${MenuImg3}`,
    price: 13,
  },
  {
    title: "Our Favourite Menu 4",
    description: "Amet minim mollit non deserunt ullamco",
    img: `${MenuImg4}`,
    price: 13,
  },
  {
    title: "Our Favourite Menu 5",
    description: "Amet minim mollit non deserunt ullamco",
    img: `${MenuImg5}`,
    price: 13,
  },
  {
    title: "Our Favourite Menu 6",
    description: "Amet minim mollit non deserunt ullamco",
    img: `${MenuImg6}`,
    price: 13,
  },
];

function FavouriteMenu() {
  return (
    <div>
      <h3
        style={{
          color: " rgba(34, 34, 34, 1)",
          fontFamily: "Playfair Display",
          fontWeight: "700",
          fontSize: "3rem",
          textAlign: "center",
          marginTop: "7rem",
        }}
      >
        Our Favourite Menu
      </h3>
      <MenuWrapper>
        {favMenuItem.map((val) => (
          <FavoriteMenuItem
            title={val.title}
            decription={val.description}
            price={val.price}
            img={val.img}
          />
        ))}

        {/* <FavoriteMenuItem
          title="Our Favourite Menu 1"
          decription="Amet minim mollit non deserunt ullamco"
          img={MenuImg1}
          price={13}
        />
        <FavoriteMenuItem
          title="Our Favourite Menu 4"
          decription="Amet minim mollit non deserunt ullamco"
          img={MenuImg2}
          price={13}
        />
        <FavoriteMenuItem
          title="Our Favourite Menu 2"
          decription="Amet minim mollit non deserunt ullamco"
          img={MenuImg3}
          price={13}
        />
        <FavoriteMenuItem
          title="Our Favourite Menu 5"
          decription="Amet minim mollit non deserunt ullamco"
          img={MenuImg4}
          price={13}
        />
        <FavoriteMenuItem
          title="Our Favourite Menu 3"
          decription="Amet minim mollit non deserunt ullamco"
          img={MenuImg5}
          price={13}
        />
        <FavoriteMenuItem
          title="Our Favourite Menu 6"
          decription="Amet minim mollit non deserunt ullamco"
          img={MenuImg6}
          price={13}
        /> */}
      </MenuWrapper>
    </div>
  );
}

export default FavouriteMenu;
