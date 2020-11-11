import React from 'react';
import Button from '../Button';
import Links from '../Links';
import { colors } from '../../theme';

import {
  Container,
  Logo,
  LogoContainer,
  Title,
  NavigationMenuContainer,
} from './styles';

const Header: React.FC = () => (
  <Container>
    <LogoContainer>
      <Logo />
      <Title>Pinterest</Title>
    </LogoContainer>
    <NavigationMenuContainer>
      <Links />
      <Button
        backgroundColor={colors.red}
        color="white"
      >
        Entrar
      </Button>
      <Button
        backgroundColor={colors.gray}
        color="black"
      >
        Criar Conta
      </Button>
    </NavigationMenuContainer>
  </Container>
);

export default Header;
