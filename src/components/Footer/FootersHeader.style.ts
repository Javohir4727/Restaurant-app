import styled from "styled-components";

const FootersHeaderWrapper = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  margin-top: 4rem;

  header {
    display: flex;
    height: 10vh;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 2rem;

    .logo {
      img {
        width: 80px;
        cursor: pointer;
      }
    }

    .iconWrapper {
      img {
        margin: 0 1rem;
        cursor: pointer;
      }
    }
  }
`;

export default FootersHeaderWrapper;
