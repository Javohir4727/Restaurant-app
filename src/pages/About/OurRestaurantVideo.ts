import styled from "styled-components";

const OurRestaurantVideoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;

  .title {
    width: 100%;
    max-width: 700px;
  }
  .video-container {
    position: relative;
    width: 100%;
    max-width: 1060px;
    height: auto;
    border-radius: 20px;
    overflow: hidden;
  }
`;

const Title = styled.h4`
  font-weight: 700;
  font-family: Playfair Display;
  font-size: 48px;
  margin-top: 90px;
  margin-bottom: 0;
`;

const Description = styled.p`
  color: rgba(133, 133, 133, 1);
  line-height: 24px;
`;

export { Title, Description };
export default OurRestaurantVideoWrapper;
