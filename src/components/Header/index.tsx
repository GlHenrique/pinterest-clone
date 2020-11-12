import React from 'react';
import ButtonRounded from '../ButtonRounded';
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
      <ButtonRounded
        backgroundColor={colors.red}
        color="white"
      >
        Entrar
      </ButtonRounded>
      <ButtonRounded
        backgroundColor={colors.gray}
        color="black"
      >
        Criar Conta
      </ButtonRounded>
    </NavigationMenuContainer>
  </Container>
);

export default Header;
