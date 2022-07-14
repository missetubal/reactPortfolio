import React, { useState } from 'react';
import Moon from '../../assets/MoonBlack';

import { NavContainer, NavLeft, NavOptions, NavRight, StyledLink, SwitchColor, TextLeft } from './Navbar.styles';

const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(false)
  return (
    <NavContainer>
      <NavLeft>
        <TextLeft>Michelle Setúbal</TextLeft>
      </NavLeft>
      
        <NavRight>
          <NavOptions>
            <StyledLink style={{textDecoration: 'none'}} to='/'>Inicio</StyledLink>
            <StyledLink to='/about'>Sobre</StyledLink>
            <StyledLink to='/qualifications'>Experiências</StyledLink>
            <StyledLink to='/projects'>Projetos</StyledLink>
            <StyledLink to='/contact'>Serviços</StyledLink>
          </NavOptions>
          <SwitchColor onClick={() => setIsDark(!isDark)}>
            <Moon />
          </SwitchColor>
        </NavRight>
      

      

    </NavContainer>
  );
}

export default Navbar;