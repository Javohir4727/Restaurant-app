import styled from "styled-components";

const FooterContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  width: 1060px;
  border-bottom: 1px dashed rgba(217, 217, 217, 1);
  border-top: 1px dashed rgba(217, 217, 217, 1);

  .elementWrapper {
    margin-top: 10px;

    img {
      width: 70px;
    }

    .contactText {
      width: 250px;
      color: rgba(133, 133, 133, 1);
    }
    .galleryHeader {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .listItem {
      padding: 0;
    }
    .listItemHot {
      width: 100%;
      padding: 8px 0;
      margin: 10px 0 0;
      display: flex;
      justify-content: space-between;

      a {
        font-size: 12px;
        color: rgba(248, 189, 73, 1);
        text-decoration: none;
      }
    }
  }
  .gallery {
    max-width: 380px;
    width: 100%;
    .swiper-wrapper {
      height: 100px;
      background-color: transparent;
    }
    .swiper-wrapper img::selection {
      background-color: transparent;
    }
    .slider-controls {
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .swiper-button-prev,
      .swiper-button-next {
        margin-top: 30px;
      }
    }
  }
  .galleryHeader {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .contactWrapper {
    width: 250px;
    .contactIcon {
      color: rgba(248, 189, 73, 1);
      width: 16px;
    }
  }
`;

export default FooterContentWrapper;
