import styled, { keyframes } from "styled-components";

const arrowAnimate = keyframes`
  0% {
    background-color: #FCA138;
    opacity: 0.7;
  }
  100% {
    background-color: #FCA138;
  }
`;

const arrowIconAnimate = keyframes`
  0% {
    top: -8px;
  }
  100% {
    top: calc(100% - 8px);
  }
`;

export const ArrowDownWrapper = styled.div`
  width: 30px;
  height: auto;
  position: absolute;
  bottom: 20px;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    animation: ${arrowAnimate} .6s ease-in-out infinite;
    
    & + span {
      margin-top: 5px;
    }
  }

  span:nth-child(2) {
    animation-delay: .1s;
  }
  span:nth-child(3) {
    animation-delay: .2s;
  }
  span:nth-child(4) {
    animation-delay: .3s;
  }
  span:nth-child(5) {
    animation-delay: .4s;
  }

  > div {
    width: 35px;
    position: absolute;
    animation: ${arrowIconAnimate} .8s ease-in-out infinite;

    > svg {
      stroke: ${({ theme }) => theme.colors["orange-200"]};
    }
  }
`;