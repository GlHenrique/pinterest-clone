import React from 'react';

import { Container, ButtonComponent } from './styles';
import { Props } from './types';

const ButtonRounded: React.FC<Props> = ({ backgroundColor, children, color }) => (
  <Container>
    <ButtonComponent
      color={color}
      backgroundColor={backgroundColor}
    >
      {children}
    </ButtonComponent>
  </Container>
);

export default ButtonRounded;
