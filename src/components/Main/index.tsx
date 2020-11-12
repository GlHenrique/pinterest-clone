import React from 'react';
import DinamicTitle from '../DinamicTitle';
import Masonry from '../Masonry';
import Slider from '../Slider';

import { Container, Title } from './styles';

const Main: React.FC = () => (
  <Container>
    <Title>Encontre sua próxima</Title>
    <DinamicTitle>ideia para um jantar especial</DinamicTitle>
    <Slider />
    <Masonry />
  </Container>
);

export default Main;
