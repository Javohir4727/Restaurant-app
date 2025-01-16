import styled from "styled-components";

const ReviewsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .contentWrapper {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    width: 280px;
    border-radius: 8px;
    padding: 2rem;
    background-color: #fff;
    text-align: center;
    margin-bottom: 50px;
  }

  h5 {
    font-family: Playfair Display;
    font-weight: 700;
    font-size: 22px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  p {
    line-height: 24px;
    color: rgba(133, 133, 133, 1);
    font-weight: 400;
    margin-bottom: 50px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h6 {
    font-size: 16px;
    font-weight: 500;
  }

  .imgWrapper {
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;

export default ReviewsStyled;
