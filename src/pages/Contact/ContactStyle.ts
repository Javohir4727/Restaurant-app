import styled from "styled-components";

const MapWrapper = styled.div`
  width: 1160px;
  margin: 80px 0;

  img {
    width: 100%;
  }
`;

const ContacInfoWrapper = styled.div``;

const ContactInfoTitle = styled.h4`
  font-weight: 700;
  font-size: 48px;
  font-family: Playfair Display;
  text-align: center;
`;

const ContactIconsWrapper = styled.div`
  display: flex;

  justify-content: center;
  text-align: center;
`;

const IconBox = styled.div`
  width: 350px;
  border-bottom: 3px dashed rgba(0, 0, 0, 0.1);

  h6 {
    font-weight: 700;
    font-family: Playfair Display;
    font-size: 28px;
    margin: 25px 0 10px;
  }

  p {
    font-size: 20px;
  }
`;

export {
  MapWrapper,
  ContacInfoWrapper,
  ContactInfoTitle,
  ContactIconsWrapper,
  IconBox,
};
