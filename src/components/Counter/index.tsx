import React, {useState, useEffect} from 'react';
import {Text, Button} from 'react-native';

import {Container} from './styles';

const Counter: React.FC = () => {
  const [counter, setCounter] = useState('');
  const [seconds, setSeconds] = useState(0);
  let timer;

  function getTimeFromSeconds() {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {timeZone: 'GMT'});
  }

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setSeconds(seconds + 1);
      setCounter(getTimeFromSeconds());
    });

    return () => {
      clearInterval(counterInterval);
    };
  }, []);

  function startTimer() {
    //timer = setInterval(function () {
    //setSeconds(seconds + 1);
    //setCounter(getTimeFromSeconds());
    //console.log(getTimeFromSeconds());
    //}, 1000);
  }

  const iniciarCronometro = () => {
    clearInterval(timer);
    startTimer();
  };

  const pausarCronometro = () => {
    clearInterval(timer);
  };

  const zerarCronometro = () => {
    clearInterval(timer);
    setSeconds(0);
  };

  return (
    <Container>
      <Text>{counter}</Text>
      <Button onPress={() => iniciarCronometro()} title="iniciar" />
      <Button onPress={() => pausarCronometro()} title="pausar" />
      <Button onPress={() => zerarCronometro()} title="zerar" />
    </Container>
  );
};

export default Counter;
