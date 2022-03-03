import React from 'react';

import {Container, Title} from './styles';
import {TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
  type: 'primary' | 'secondary';
  // onPress: () => void;
}

export function Button({title, type, ...rest}: Props) {
  return (
    <Container type={type} {...rest}>
      <Title type={type}>{title}</Title>
    </Container>
  );
}
