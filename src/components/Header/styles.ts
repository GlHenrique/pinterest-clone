import styled from 'styled-components';
import { colors } from '../../theme';
import logo from '../../assets/images/logo.svg';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
    width: 32px;
    height: 32px;
`;

export const Title = styled.h1`
  font-size: 20px;
  color: ${colors.red};
  margin-top: 8px;
`;

export const NavigationMenuContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 16px;
`;
