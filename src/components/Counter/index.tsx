import React, {useState, useEffect, useRef} from 'react';
import {} from 'react-native';

import {Container, Text, Buttons} from './styles';

import Button from '../Button';

const Counter: React.FC = () => {
  const timerRef = useRef<NodeJS.Timer>();
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

    timerRef.current = setInterval(() => {
      setSeconds(t => t + 1);
    }, 1000);

    //setStart(false);
  }, [start]);

  const iniciarCronometro = () => {
    clearInterval(timerRef.current);
    setStart(true);
  };

  const pausarCronometro = () => {
    clearInterval(timerRef.current);
    setStart(false);
  };

  const zerarCronometro = () => {
    clearInterval(timerRef.current);
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
        />
        <Button onPress={() => zerarCronometro()} title="zerar" />
      </Buttons>
    </Container>
  );
};

export default Counter;
