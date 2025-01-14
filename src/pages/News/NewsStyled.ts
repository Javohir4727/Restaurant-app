import styled from "styled-components";

const Container = styled.div`
  margin-top: 70px;
  width: 1160px;
`;

const TitleNewsletter = styled.h2`
  font-size: 48px;
  font-weight: 700;
  font-family: Playfair Display;
  text-align: center;
`;
const ContentsMenuWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const SwipperButton = styled.button`
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid rgba(217, 217, 217, 1);
`;

const ContentWrapper = styled.div`
  border: 1px solid rgba(217, 217, 217, 1);
  border-radius: 6px;
  width: 340px;
  padding: 15px;
  margin: 10px 0;

  img {
    width: 100%;
  }

  h6 {
    font-weight: 700;
    font-family: Playfair Display;
    font-size: 24px;
    margin: 10px 0;
  }

  p {
    color: rgba(133, 133, 133, 1);
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

  a {
    color: rgba(248, 189, 73, 1);
    text-decoration: none;
    font-weight: 700;
  }
`;

export {
  Container,
  TitleNewsletter,
  ContentWrapper,
  ContentsMenuWrapper,
  SwipperButton,
};
