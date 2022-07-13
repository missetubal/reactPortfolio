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
                <Route path='/portfolio/' element={<Home />} />
                <Route path='/portfolio/about' element={<About />} />
                <Route path='/portfolio/projects' element={<Projects />} />
                <Route path='/portfolio/qualifications' element={<Qualifications />} />
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoute;