import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom'
import About from '../pages/About/About.screen';
import Home from '../pages/Home/Home.screen';
import Projects from '../pages/Projects/Projects.screen';

import { AnimatePresence } from 'framer-motion'
import Qualifications from '../pages/Qualifications/Qualifications.screen';

const AnimatedRoute: React.FC = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='projects' element={<Projects />} />
                <Route path='qualifications' element={<Qualifications />} />
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoute;