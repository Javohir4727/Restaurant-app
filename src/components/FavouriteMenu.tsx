import { useEffect, useState } from "react";
import styled from "styled-components";
import FavoriteMenuItem from "./FavoriteMenuItem";
import { supabase } from "../utils/supabase";

interface favouriteMenuRestaurnat {
  img: string;
  title: string;
  description: string;
  price: number;
}

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 5rem;
  margin-bottom: 170px;

  .menuContentWrapper {
    display: flex;
    align-items: center;

    gap: 1rem;

    img {
      border-radius: 16px;
      width: 150px;
      height: 150px;
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

function FavouriteMenu() {

  const [getDataBase, setDataBase] = useState<favouriteMenuRestaurnat[]>([]);
  const fetchData = async () => {
    try {
      let { data: FavouriteMenu, error } = await supabase
        .from("FavouriteMenu")
        .select("*");

      setDataBase(FavouriteMenu || []);
      if (error) {
        throw error;
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div style={{ width: "1100px" }}>
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
          {getDataBase.map((val) => (
            <FavoriteMenuItem
              title={val.title}
              decription={val.description}
              price={val.price}
              img={val.img}
            />
          ))}
        </MenuWrapper>
      </div>

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
      </MenuWrapper>

    </div>
  );
}

export default FavouriteMenu;
