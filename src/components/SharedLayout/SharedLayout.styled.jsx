import styled from '@emotion/styled';

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
  height: ${p => p.theme.space[5]}px;
  padding: 4px 0;
  background-color: white;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  gap: ${p => p.theme.space[4]}px;
`;

export const DateToday = styled.p`
  font-weight: 700;
`

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
