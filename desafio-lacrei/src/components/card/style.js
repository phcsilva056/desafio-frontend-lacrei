import styled from "styled-components";

export const CardColor = styled.div`
  width: 60vw;
  min-width: 360px;
  height: 60px;
  border-radius: 4px;
  background-color: ${({ info, bgTimer }) => (bgTimer ? info.color : "unset")};
  border: 3px solid ${({ info }) => info.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const showTimer = styled.p`
font-size: 18px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

export const Loading = styled.div`
  background-color: ${({ color }) => color};
  width: 24px;
  height: 24px;
  border-radius: 100%;
  animation: load 1.5s infinite linear;
  @keyframes load {
    0% {
      width: 10px;
      height: 10px;
    }
    50% {
      width: 24px;
      height: 24px;
    }
    100% {
      width: 10px;
      height: 10px;
    }
  }
`;
