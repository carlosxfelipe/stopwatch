import React, {useState, useEffect} from 'react';
import BackgroundTimer from 'react-native-background-timer';

import {Container, Text, Buttons} from './styles';

import Button from '../Button';

const Counter: React.FC = () => {
  const [counter, setCounter] = useState('');
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const date = new Date(2022, 3, 22, 0, 0, seconds);
    const formattedDate = date.toLocaleTimeString('pt-BR');
    setCounter(formattedDate);
  }, [seconds]);

  useEffect(() => {
    if (start === false) {
      return;
    }

    BackgroundTimer.runBackgroundTimer(() => {
      setSeconds(t => t + 1);
    }, 1000);
  }, [start]);

  const iniciarCronometro = () => {
    setStart(true);
  };

  const pausarCronometro = () => {
    BackgroundTimer.stopBackgroundTimer();
    setStart(false);
  };

  const zerarCronometro = () => {
    setStart(false);
    setSeconds(0);
  };

  return (
    <Container>
      <Text>{counter}</Text>
      <Buttons>
        <Button
          onPress={() => (start ? pausarCronometro() : iniciarCronometro())}
          title={start ? 'pausar' : 'iniciar'}
          color="#12A454"
          margin={10}
        />
        <Button
          onPress={() => zerarCronometro()}
          title="zerar"
          color="#E83F5B"
          margin={10}
        />
      </Buttons>
    </Container>
  );
};

export default Counter;
