import React from 'react';

import { Container, ButtonComponent } from './styles';
import { Props } from './types';

const Button: React.FC<Props> = ({ backgroundColor, children, color }) => (
  <Container>
    <ButtonComponent
      color={color}
      backgroundColor={backgroundColor}
    >
      {children}
    </ButtonComponent>
  </Container>
);

export default Button;
