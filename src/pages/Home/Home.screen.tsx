import React from 'react';
import HiMemoji from '../../assets/Memoji/HiMemoji.png'
import { ButtonContainer, Container, CVButton, GetInTouchButton, HelloContainer, Left, Memoji, MemojiImage, NameContainer, NameText, Right, Subtitle, TextCotainer, TextHello } from './Home.styles';
import SocialMedia from '../../components/SocialMedia/SocialMedia.component';
import { motion } from 'framer-motion';


const Home: React.FC = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition= {{duration: 0.6}}
        >
            <Container>
                <SocialMedia />
                <Left>
                    <HelloContainer>
                        <TextHello>Olá!</TextHello>
                    </HelloContainer>
                    <NameContainer >
                        <NameText>Eu sou a</NameText>
                        <NameText textDecoration='underline' color='#737373' fontWeight={700}> Michelle</NameText>
                    </NameContainer>
                    <TextCotainer>
                        <Subtitle> Front-End Developer</Subtitle>
                    </TextCotainer>
                    <ButtonContainer>
                        <CVButton href='#' target='=_blank'>Download CV</CVButton>
                        <GetInTouchButton href='#' target='=_blank'>Entre em Contato</GetInTouchButton>
                    </ButtonContainer>
                </Left>
                <Right>
                    <MemojiImage >
                        <Memoji src={HiMemoji} />
                    </MemojiImage>
                </Right>
            </Container>
        </motion.div>

    );
}

export default Home;