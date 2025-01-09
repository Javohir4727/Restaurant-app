import styled from "styled-components";

const SubscribeSection = styled.div`
  position: relative;
  width: 1060px;
  height: 100%;
  text-align: center;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  h3 {
    color: rgba(255, 255, 255, 1);
    font-family: Playfair Display;
    font-weight: 700;
    font-size: 64px;
    margin-top: 8rem;
    margin-bottom: 0;
  }

  p {
    color: white;
    color: rgba(255, 255, 255, 1);
    line-height: 24px;
    font-weight: 400;
    margin-bottom: 30px;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 20px;

    input {
      background-color: rgba(255, 255, 255, 0.21);
      color: rgba(255, 255, 255, 1);
      width: 230px;
      padding: 15px 0px 15px 10px;
      border-radius: 8px;
      border: none;

      &::placeholder {
        color: rgba(255, 255, 255, 1);
      }
    }
    button {
      background-color: rgba(248, 189, 73, 1);
      color: rgba(34, 34, 34, 1);
      font-weight: 600;
      line-height: 21px;
      padding: 15px 30px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
    }
  }
`;

export default SubscribeSection;
