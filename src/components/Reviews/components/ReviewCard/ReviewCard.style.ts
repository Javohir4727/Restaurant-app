import styled from "styled-components";

export const StyledReviewCard = styled.div`
  width: 330px;
  height: 380;
  background-color: rgba(255, 255, 255, 1);
  text-align: center;
  border-radius: 10px;
  box-shadow: 1px 1px 10px rgba(20, 18, 103, 0.03);
  margin: 0 20px;
  overflow: hidden;
  display: flex;
  justify-content: center;

  div {
    width: 250px;
  }
  h6 {
    font-family: Playfair Display;
    font-size: 22px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 0;
  }

  p {
    font-weight: 400;
    line-height: 24px;
    color: rgba(133, 133, 133, 1);
    padding-bottom: 24px;
    border-bottom: 1px dashed rgba(217, 217, 217, 1);

    &:last-child {
      color: black;
      font-weight: 500;
      border: none;
    }
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;
