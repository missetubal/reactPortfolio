import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import MenuMobile from './components/MenuMobile/MenuMobile.component';
import Navbar from './components/Navbar/Navbar.component';
import AnimatedRoute from './routes/AnimatedRoutes';
import { GlobalStyle } from './styles/general.styles';

function App() {
  return (
    <Router>
      <GlobalStyle>
        <Navbar />
        <MenuMobile />
        <AnimatedRoute />
      </GlobalStyle>
    </Router>


  );
}

export default App;
