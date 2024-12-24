import styled from "styled-components";

export const ReservBtn = styled.button`
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, 1);
  //
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1.2rem;
  margin-top: 1.2rem;
  transition: 400ms;
  cursor: pointer;

  &:hover {
    background-color: rgba(248, 189, 73, 1);
    border: 1px solid rgba(248, 189, 73, 1);
    color: black;
  }
`;
