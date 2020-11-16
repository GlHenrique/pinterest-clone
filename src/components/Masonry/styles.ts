import styled, { keyframes } from 'styled-components';

export const MasonryContainer = styled.section`
  columns: 4;
  column-gap: 16px;
  padding: 16px;

  @media (max-width: 1200px) {
    columns: 3;
  }
  @media (max-width: 992px) {
    columns: 2;
  }
`;

export const wait = keyframes`
  from: {
    opacity: 0;
  }

  to: {
    opacity: 1;
  }
`;

const shake = keyframes`
  from {
    transform: translateY(0)
  }

  to {
    transform: translateY(90px);
  }
`;

export const Grid = styled.div`
  display: inline-block;
  margin-bottom: 16px;
  position: relative;
  animation-name: ${shake};
  animation-duration: 0.8s;
  animation-iteration-count: 2;
  animation-direction: alternate;

  &:before {
    border-radius: 5px;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const floating = keyframes`
  from {
    transform: translateY(-20px);
  }

  to {
    transform: translateY(0);
  }

`;

export const ButtonScrollContainer = styled.div`
    position: fixed;
    left: 50%;  
    bottom: 16px;
    animation: ${floating} 1s alternate infinite;

    :hover {
      animation-play-state: paused;
    }
`;
