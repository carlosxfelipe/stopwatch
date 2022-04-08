import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Container, Title} from './styles';

type ButtonProps = {
  onPress: () => void;
  title: string;
  color?: string;
  margin?: number;
};

const Button: React.FC<ButtonProps> = ({onPress, title, color, margin}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container color={color} margin={margin}>
        <Title>{title}</Title>
      </Container>
    </TouchableOpacity>
  );
};

export default Button;
