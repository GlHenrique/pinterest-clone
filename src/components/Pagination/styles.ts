import styled from 'styled-components';

export const Container = styled.div`
    margin: 16px 0;
`;

export const Circle = styled.span<{ color: string }>`
    cursor: pointer;
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;
