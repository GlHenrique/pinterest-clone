import styled from 'styled-components';
import lumiance from '../../utils/lumiance';

export const Button = styled.button`
  cursor: pointer;
  border-radius: 50%;
  background-color: green;
  width: 56px;
  height: 56px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
      background-color: ${lumiance('#00FF00', -0.55)}
  }

  svg {
      fill: white;
  }
`;
