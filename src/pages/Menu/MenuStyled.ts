import styled from "styled-components";

const Stack = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChooseMenuWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin-bottom: 40px;
`;

const MenuWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const MenuImgWrapper = styled.div`
  width: 100%;
  max-width: 320px;
  border-radius: 8px;
  margin: 25px 0;
  transition: 400ms;
  cursor: pointer;

  &:hover {
    box-shadow: 1px 1px 20px gray;
    transform: scale(1.2, 1.2);
  }

  img {
    width: 100%;
    height: 280px;
    border-radius: 10px;
  }

  h6 {
    font-family: "Playfair Display";
    font-weight: 700;
    font-size: 24px;
    margin: 10px 0 0;
    display: flex;
    justify-content: space-between;
  }

  p {
    font-size: 14px;
    color: rgba(133, 133, 133, 1);
    margin-top: 5px;

    &:first-child {
      color: rgba(248, 189, 73, 1);
    }
  }

  span {
    font-weight: 500;
    color: black;
  }
`;

export { ChooseMenuWrapper, MenuImgWrapper, MenuWrapper };
export default Stack;
