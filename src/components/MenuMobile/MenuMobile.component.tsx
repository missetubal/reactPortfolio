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
          <Pages to='/' onClick={()=>setIsMenuOpen(!isMenuOpen)}>Inicio</Pages>
          <Pages to='/about'onClick={()=>setIsMenuOpen(!isMenuOpen)}>Sobre</Pages>
          <Pages to='/qualifications'onClick={()=>setIsMenuOpen(!isMenuOpen)}>Experiências</Pages>
          <Pages to='/projects'onClick={()=>setIsMenuOpen(!isMenuOpen)}>Projetos</Pages>
          <Pages to='/contact'onClick={()=>setIsMenuOpen(!isMenuOpen)}>Serviços</Pages>
        </MenuOptions>
      )
      }


    </Container>
  )
}

export default MenuMobile;