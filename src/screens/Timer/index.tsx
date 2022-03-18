import React from 'react';

import Counter from '../../components/Counter';

import {Container, Title} from './styles';

const Timer = () => {
  return (
    <Container>
      <Title>Cronômetro</Title>
      <Counter></Counter>
    </Container>
  );
};

export default Timer;
