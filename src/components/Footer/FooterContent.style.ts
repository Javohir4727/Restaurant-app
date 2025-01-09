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
    div {
      display: flex;
      justify-content: space-between;

      img {
        width: 80px;
      }
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
