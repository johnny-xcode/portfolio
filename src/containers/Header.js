import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components';
import { ColorScheme } from '../theme/styleConstants.js'

const HeaderDiv = styled.header`
  background: ${ColorScheme.secondary};
  color: #fff;
  padding: 0 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

const Bar = styled.div`
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 12px 0;
`;

const Brand = styled(Link)`
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 0.5px;
  &:hover {
    color: #fff;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const NavLinkStyled = styled(NavLink)`
  color: #d7e3ec;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.92rem;
  &:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    text-decoration: none;
  }
  &.active {
    color: #fff;
    background: ${ColorScheme.primary};
  }
`;

function Header() {
  return (
    <HeaderDiv>
      <Bar>
        <Brand to="/">Johnny Acierto Tabong</Brand>
        <Nav>
          <NavLinkStyled to="/" end>About</NavLinkStyled>
          <NavLinkStyled to="/skills">Skills</NavLinkStyled>
          <NavLinkStyled to="/experience">Experience</NavLinkStyled>
          <NavLinkStyled to="/work">Recent Work</NavLinkStyled>
          <NavLinkStyled to="/side-project">Side Project</NavLinkStyled>
          <NavLinkStyled to="/contact">Contact</NavLinkStyled>
        </Nav>
      </Bar>
    </HeaderDiv>
  );
}

export default Header;
