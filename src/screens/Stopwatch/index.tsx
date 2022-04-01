import React from 'react';

import Counter from '../../components/Counter';

import {Container, Header, Title} from './styles';

const Stopwatch = () => {
  return (
    <Container>
      <Header>
        <Title>Cronômetro</Title>
      </Header>

      <Counter />
    </Container>
  );
};

export default Stopwatch;
