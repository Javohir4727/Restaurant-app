import { useEffect, useState } from "react";
import styled from "styled-components";
import OurNewsletterItem from "./OurNewsletterItem";
import { supabase } from "../utils/supabase";
import { useNavigate } from "react-router-dom";

interface newsLetterRestuarant {
  img: string;
  title: string;
  description: string;
  link: string;
}

const OurMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  overflow: hidden;

  .cardImgWrapper {
    text-align: center;
    max-width: 330px;
    margin: 0 auto;
    overflow: hidden;

    img {
      max-width: 100%;
      width: 300px;
      height: 200px;
    }
  }

  h4 {
    font-size: 24px;
    font-family: Playfair Display;
    font-weight: 700;
    line-height: 32px;
    text-align: start;
    margin: 8px auto;
  }

  p {
    color: rgba(133, 133, 133, 1);
    line-height: 24px;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 30px;
  }

  a {
    text-decoration: none;
    color: rgba(248, 189, 73, 1);
    font-weight: 700;
    line-height: 24px;
  }
`;

function OurNewsletter() {
  const navigate = useNavigate();
  const [getDataBase, setDataBase] = useState<newsLetterRestuarant[]>([]);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("OurNewsLetter").select("*");

      setDataBase(data || []);
      if (error) {
        throw error;
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        marginTop: "10rem",
      }}
    >
      <h3
        style={{
          textAlign: "center",
          fontFamily: "Playfair Display",
          fontSize: "3rem",
        }}
      >
        Welcome to Our Newsletter
      </h3>
      <OurMenuWrapper>
        {getDataBase.map((val, index) => (
          <OurNewsletterItem
            key={index}
            img={val.img}
            title={val.title}
            description={val.description}
            link={val.link}
          />
        ))}
      </OurMenuWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "2rem auto",
        }}
      >
        <button
          style={{
            border: "1px solid rgba(34, 34, 34, 1)",
            background: "transparent",
            borderRadius: "8px",
            padding: "12px 24px",
            fontWeight: "500",
            cursor: "pointer",
          }}
          onClick={() => navigate("/DetailBlog")}
        >
          See all
        </button>
      </div>
    </div>
  );
}

export default OurNewsletter;
