import React, { useState } from 'react';
import { Container, MenuButton, MenuOptions, Pages, SwitchColor } from './MenuMobile.style';
import { HiMenu } from 'react-icons/hi'
import Moon from '../../assets/MoonBlack';

const MenuMobile: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  return (
    <Container>
      <SwitchColor onClick={() => setIsDark(!isDark)}>
        {!isDark && <Moon width={20}/>}
      </SwitchColor>
      <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>

        <HiMenu width={40} height={40} />
      </MenuButton>
      {isMenuOpen && (
        <MenuOptions>
          <Pages href='/'>Inicio</Pages>
          <Pages href='/about'>Sobre</Pages>
          <Pages href='/qualifications'>Experiências</Pages>
          <Pages href='/projects'>Projetos</Pages>
          <Pages href='/contact'>Serviços</Pages>
        </MenuOptions>
      )
      }


    </Container>
  )
}

export default MenuMobile;