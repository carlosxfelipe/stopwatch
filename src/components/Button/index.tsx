import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Container, Title} from './styles';

type ButtonProps = {
  onPress: () => void;
  title: string;
};

const Button: React.FC<ButtonProps> = ({onPress, title}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <Title>{title}</Title>
      </Container>
    </TouchableOpacity>
  );
};

export default Button;
