import styled from 'styled-components';
import lumiance from '../../utils/lumiance';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 72px;
`;

export const ButtonComponent = styled.button<{ backgroundColor: string; color: string}>`
    cursor: pointer;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 25px;
    padding: 14px;
    border: none;
    color: ${(props) => props.color};
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s, background-color 0.2s;

    :hover {
        background-color: ${(props) => lumiance(props.backgroundColor, -0.15)};
    }

    :active {
        transform: scale(0.9)
    }
`;
