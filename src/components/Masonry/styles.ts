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

export const Grid = styled.div`
  display: inline-block;
  margin-bottom: 16px;
  position: relative;
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
  .title {
    font-size: 28px;
    font-weight: bold;
    margin: 0px 0px 10px 0px;
  }
  .author {
    font-size: 14px;
    font-weight: 300;
  }
  .link {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .body {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding: 30px 30px;
    color: #fff;
    display: flex;
    flex-direction: column;

    .mt-auto {
      margin-top: auto;
    }
  }
  .tag {
    background-color: rgba(255, 255, 255, 0.8);
    color: #333;
    border-radius: 5px;
    padding: 5px 15px;
    margin-bottom: 5px;
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
