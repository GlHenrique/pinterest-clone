import React, { useState } from 'react';
import ButtonRounded from '../ButtonRounded';
import Links from '../Links';
import { colors } from '../../theme';

import {
  Container,
  Logo,
  LogoContainer,
  Title,
  NavigationMenuContainer,
  MenuIcon,
  CloseMenu,
  MobileMenu,
} from './styles';

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const closeMenu = () => {
    setOpenMenu(false);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileMenu open={openMenu}>
        <CloseMenu onClick={closeMenu}>&times;</CloseMenu>
        <h3>Sobre</h3>
        <h3>Business</h3>
        <h3>Blog</h3>
        <h3>Entrar</h3>
        <h3>Criar Conta</h3>
      </MobileMenu>
      <Container>
        <LogoContainer>
          <MenuIcon onClick={toggleMenu}>&#9776;</MenuIcon>
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
    </>
  );
};

export default Header;
