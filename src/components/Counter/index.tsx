import React, {useState, useEffect, useRef} from 'react';
import {Text, Button} from 'react-native';

import {Container} from './styles';

const Counter: React.FC = () => {
  const timerRef = useRef(setInterval(() => {}));
  const [counter, setCounter] = useState('a');
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const date = new Date(seconds * 1000);
    const formattedDate = date.toLocaleTimeString('pt-BR', {timeZone: 'GMT'});
    setCounter(formattedDate);
  }, [seconds]);

  useEffect(() => {
    if (!start) {
      return;
    }

    timerRef.current = setInterval(() => {
      setSeconds(t => t + 1);
    }, 1000);

    setStart(false);

    // return () => {
    //   clearInterval(counterInterval);
    // };
  }, [start]);

  function startTimer() {
    setStart(true);
  }

  const iniciarCronometro = () => {
    clearInterval(timerRef.current);
    startTimer();
  };

  const pausarCronometro = () => {
    clearInterval(timerRef.current);
  };

  const zerarCronometro = () => {
    // clearInterval(timerRef.current);
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
