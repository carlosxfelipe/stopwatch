import React from 'react';

import Counter from '../../components/Counter';

import {Container, Title} from './styles';

const Stopwatch = () => {
  return (
    <Container>
      <Title>Cronômetro</Title>
      <Counter />
    </Container>
  );
};

export default Stopwatch;
