import React from 'react';
import { Container, Image, Left, Memoji, Right, Title } from './Qualifications.styles';
import TheThinker from '../../assets/Memoji/TheThinker.png'
// import { Container } from './styles';

const Qualifications: React.FC = () => {
  return (
    <Container>
      <Left>
        <Title>Acadêmico</Title>
        <Title fontSize={20}>Engenharia Elétrica</Title>
      </Left>
      <Right>
        <Title>Profissional</Title>
        <Memoji>
          <Image src={TheThinker} />
        </Memoji>
      </Right>
    </Container>
  );
}

export default Qualifications;