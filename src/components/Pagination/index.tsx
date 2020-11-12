import React from 'react';
import { Container, Circle } from './styles';
import { Props } from './types';

const Pagination: React.FC<Props> = ({ color }) => (
  <Container>
    <Circle color={color} />
  </Container>
);

export default Pagination;
