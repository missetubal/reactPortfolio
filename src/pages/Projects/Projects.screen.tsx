import { motion } from 'framer-motion';
import React from 'react';
import { Container, Ring, Span } from './Projects.style';


const Projects: React.FC = () => {
  return (
    <motion.div
    initial={{opacity: 0, x: 100}}
    animate={{ opacity: 1, x: 0}}
    exit={{opacity: 0, x: -100 }}
    >
        <Container>
            <Ring>Em breve
                <Span></Span>
            </Ring>
        </Container>
        
    </motion.div>
  )
}

export default Projects;