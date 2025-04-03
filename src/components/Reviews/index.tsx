import React, { useEffect, useState } from "react";
import ReviewsStyled from "./Reviews.style";
import { supabase } from "utils/supabase";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";

interface customersReviewsInterface {
  title: string;
  description: string;
  img: string;
  userInfo: string;
}

const OurCustomersSay = () => {
  const [getDataBase, setDataBase] = useState<customersReviewsInterface[]>([]);
  const [groupedReviews, setGroupedReviews] = useState<
    customersReviewsInterface[][]
  >([]);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from("customersReviews")
        .select("*");

      if (error) throw error;

      setDataBase(data || []);
      groupReviews(data || []);
    } catch (error) {}
  };

  const groupReviews = (reviews: customersReviewsInterface[]) => {
    const groupSize = 3;
    const groups = [];
    for (let i = 0; i < reviews.length; i += groupSize) {
      groups.push(reviews.slice(i, i + groupSize));
    }
    setGroupedReviews(groups);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        padding: "4rem 0",
        backgroundColor: "rgba(250, 250, 250, 1)",
      }}
    >
      <h4
        style={{
          fontFamily: "Playfair Display",
          fontWeight: "700",
          lineHeight: "64px",
          fontSize: "48px",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        What Our Customers Say
      </h4>

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
          renderBullet: (index: number, className: string) =>
            `<span class="${className}" 
              style="
                width: 12px; 
                height: 12px; 
                background-color: ${
                  className.includes("swiper-pagination-bullet-active")
                    ? "yellow"
                    : "rgba(0, 0, 0, 0.2)"
                }; 
                margin: 0 4px; 
                border-radius: 50%;
              "></span>`,
        }}
        allowTouchMove={false}
        style={{ padding: "2rem 1rem" }}
      >
        {groupedReviews.map((group, groupIndex) => (
          <SwiperSlide key={groupIndex}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "1100px",
                margin: "0 auto",
              }}
            >
              <ReviewsStyled>
                {group.map((review, index) => (
                  <div className="contentWrapper" key={index}>
                    <h5>{review.title}</h5>
                    <p>{review.description}</p>
                    <div className="imgWrapper">
                      <img src={review.img} alt={review.userInfo} />
                    </div>
                    <h6>{review.userInfo}</h6>
                  </div>
                ))}
              </ReviewsStyled>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurCustomersSay;
