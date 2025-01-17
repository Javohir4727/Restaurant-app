import styled from "styled-components";

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ChooseMenuWrapper = styled.div`
  max-width: 450px;
  width: 100%;
  margin-bottom: 40px;
`;

const Typography = styled.h6`
  font-size: 48px;
  font-weight: 700;
  font-family: Playfair Display;
  text-align: center;
  margin-bottom: 40px;
`;

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: center;
  gap: 10px;
`;
const MenuImgWrapper = styled.div`
  width: 300px;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  transition: 200ms;

  &:hover {
    box-shadow: 1px 0px 10px gray;
    transform: scale(1.1, 1.1);
    cursor: pointer;
  }
  img {
    width: 100%;
    height: 280px;
    border-radius: 10px;
  }

  h6 {
    width: 380px;
    font-family: Playfair Display;
    font-weight: 700;
    font-size: 24px;
    margin: 10px 0 0;
    display: flex;
    width: 100%;
    justify-content: space-between;

    p {
      color: rgba(248, 189, 73, 1);
      font-weight: 500;
      font-size: 18px;
      font-weight: 700;
      margin-top: 0;
      line-height: 26px;
    }
    span {
      color: black;
      font-weight: 500;
    }
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: rgba(133, 133, 133, 1);
  }
`;

export { ChooseMenuWrapper, Typography, MenuImgWrapper, MenuWrapper };
export default Stack;
