import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
    font-size: 60px;
    font-weight: bold;
    @media(max-width: 700px) {
      font-size: 40px;
    }
`;
