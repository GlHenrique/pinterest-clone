import styled from 'styled-components';

export const Container = styled.ul`
    display: flex;
    gap: 32px;
`;

export const Item = styled.li`
  list-style: none;
  font-weight: bold;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
