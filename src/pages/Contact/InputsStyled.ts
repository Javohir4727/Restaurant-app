import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    text-align: center;
    font-weight: 700;
    font-family: Playfair Display;
    font-size: 48px;
  }

  .text {
    width: 850px;
  }
`;

const InputWrapper = styled.div`
  border-top: 3px dashed rgba(0, 0, 0, 0.1);
  width: 850px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .input {
    width: 400px;
    margin-bottom: 25px;
  }
`;

export { InputContainer, InputWrapper };
