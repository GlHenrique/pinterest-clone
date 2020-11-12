import React from 'react';
import Pagination from '../Pagination';

import { Container } from './styles';

const Slider: React.FC = () => (
  <Container>
    <Pagination color="#7159C1" />
    <Pagination color="#407a57" />
    <Pagination color="#0076d3" />
    <Pagination color="#7159C1" />
  </Container>
);

export default Slider;
