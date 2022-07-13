import React from 'react';
import { Container, Left, MemoImage, Right, Text } from './About.style';
import AboutMemoji from '../../assets/Memoji/AboutMemoji.png'
import SocialMedia from '../../components/SocialMedia/SocialMedia.component';
import { motion } from 'framer-motion';


const About: React.FC = () => {
    return (
        <motion.div
            initial={{opacity: 0, x: 100}}
            animate={{ opacity: 1, x: 0}}
            exit={{opacity: 0, x: -100 }}
        >
            <Container>
                <SocialMedia />
                <Left>
                    <MemoImage src={AboutMemoji} />
                </Left>
                <Right>
                    <h1>Sobre Mim</h1>
                    <Text>
                        Olá! Meu nome é Michelle e eu tenho 24 anos. Sou formada em Engenharia Elétrica e  estou fazendo Pós Graduação em Engenharia de Software.
                    </Text>
                    <Text>
                        Desde que me lembro sempre fui apaixonada pela área de programação e robótica, desde desafios simples
                        a problemas complexos de lógica.
                    </Text>
                    <Text>
                        Atualmente trabalho com front-end no time de mobile de um cripto banco e tenho focado meus estudos em assuntos relacionados
                        ao desenvolvimento mobile e ambiente de testes.
                    </Text>
                    <Text>Eu amo aprender e estou sempre disposta a dar o meu melhor em tudo que faço!
                        Caso queira saber mais sobre mim, entre em contato comigo. (: </Text>
                </Right>

            </Container>
        </motion.div>

    );
}

export default About;