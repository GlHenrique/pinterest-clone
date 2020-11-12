import styled from 'styled-components';
import { colors } from '../../theme';
import logo from '../../assets/images/logo.svg';
import lumiance from '../../utils/lumiance';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px;

  @media(max-width: 635px) {
    flex-direction: column;
    align-items: center;
  }
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

  @media(max-width: 485px) {
    display: none;
  }
`;

export const MenuIcon = styled.span`
  display: none;
  @media(max-width: 485px) {
    cursor: pointer;
    display: block;
    position: absolute;
    left: 16px;
    top: 24px;

  }
`;

export const MobileMenu = styled.nav<{ open: boolean }>`
  height: 100%;
  width: ${(props) => (props.open ? '200px' : '0')};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #FAFAFA;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  border-radius: 16px;

  h3 {
    cursor: pointer;
    font-weight: 400;
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 18px;
    color: ${colors.red};
    display: block;
    transition: 0.3s;
    width: 100px;
  }

  h3:hover {
    color: ${lumiance(colors.red, -0.22)};
  }

  @media screen and (max-height: 450px) {
    padding-top: 15px;
    h3 {font-size: 18px;}
  }
`;

export const CloseMenu = styled.button`
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  background: none;
  border: none;
  transition: 0.5s;
  color: ${colors.red};

  :hover {
    cursor: pointer;
    color: ${lumiance(colors.red, -0.22)};
  }
`;
