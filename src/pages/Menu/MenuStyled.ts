import styled from "styled-components";

const MenuContainer = styled.div`
  max-width: 1160px;
  width: 100%;
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

const Title = styled.h4`
  font-size: 48px;
  font-weight: 700;
  font-family: Playfair Display;
  text-align: center;
  margin-bottom: 40px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  border: 1px solid black;
  padding: 14px 34px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;

  &:hover {
    background-color: rgba(248, 189, 73, 1);
    border: 1px solid rgba(248, 189, 73, 1);
  }
`;
const MenuWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const MenuImgWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 10px 0;

  img {
    width: 380px;
  }

  h6 {
    width: 380px;
    font-family: Playfair Display;
    font-weight: 700;
    font-size: 24px;
    margin: 10px 0 0;
    display: flex;
    justify-content: space-between;
    P {
      color: rgba(248, 189, 73, 1);
      font-weight: 500;
      font-size: 18px;
      font-weight: 700;
      margin-top: 0;
    }
    span {
      font-weight: 500;
    }
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: rgba(133, 133, 133, 1);
  }
`;

export {
  ChooseMenuWrapper,
  Title,
  Button,
  ButtonWrapper,
  MenuImgWrapper,
  MenuWrapper,
};
export default MenuContainer;
