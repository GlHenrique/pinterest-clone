import styled from 'styled-components';
import { Props } from './types';

export const Container = styled.div<Props>`
  transform: ${(props) => (props.up ? 'rotate(180deg)' : 'rotate(0deg)')};
  height: 24px;
  width: 24px;
  transition: transform 0.2s;
`;
