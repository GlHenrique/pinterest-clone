import styled from 'styled-components';
import { Props } from './types';

export const Container = styled.div<Props>`
  transform: ${(props) => (props.up ? 'rotate(0deg)' : 'rotate(180deg)')};
  height: 24px;
  width: 24px;
  transition: transform 0.2s;
`;
