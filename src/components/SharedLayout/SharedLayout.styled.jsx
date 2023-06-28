import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Layout = styled.div`
  display: grid;
  grid-template-rows: 1fr auto auto;
  min-height: 100vh;
  padding-top: ${p => p.theme.space[1]}px;
  background-color: ${p => p.theme.colors.bcgMain};
`;

export const Header = styled.div`
  border-bottom: 1px solid grey;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background-color: white;
`;

export const UnselectedBtn = styled.button`
  border: ${p => (p.pressed ? '1px solid grey' : 'none')};
  background-color: ${p => (p.pressed ? 'lightgrey' : 'transparent')};
  padding: 4px;
  cursor: pointer;
  transition: color 250ms ease-in;

  transition: color 250ms ease-in;

  &:hover {
    color: green;
  }
`;

export const ApplyBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin-left: 4px;
  cursor: pointer;
  transition: color 250ms ease-in;

  &:hover {
    color: green;
  }
`;

export const UserMenuBtn = styled.div`
  position: relative;
  border: none;
  background-color: transparent;
  padding: 2px 0 2px 8px;
  height: 100%;
  cursor: pointer;
  transition: color 250ms ease-in;

  &:hover {
    color: green;
  }

  &:hover > div {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;

export const Green = styled.span`
  display: inline-flex;
  justify-content: center;
  min-width: 24px;
  padding: 2px 0;
  border-radius: 50%;
  background-color: green;
  color: white;
  font-weight: 700;
`;

export const TaskCalc = styled(NavLink)`
  text-decoration: none;
  color: #212121;
`;

export const DateToday = styled.p`
  font-weight: 700;

  @media screen and (max-width: 767.98px) {
    display: none;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
  border-top: 1px solid grey;
  width: 100%;
  height: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.xs};
  color: ${p => p.theme.colors.main};
  z-index: 100;
`;

export const MyLink = styled.a`
  color: ${p => p.theme.colors.main};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;

  transition: color 250ms linear;

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
  }
`;
