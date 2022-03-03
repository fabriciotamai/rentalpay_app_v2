import React from 'react';
import {SvgProps} from 'react-native-svg';
import LogoRental from '../../assets/imgs/rental_pay_logo.svg';

import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  title?: any;
  icon?: any;
}

import {Container, Button, Title} from './styles';

export function HeaderGlobal({title, icon, ...rest}: Props) {
  function getIcoin(icon: string) {}

  function logoOrTitle(title: string) {
    console.log(title);

    if (title) {
      return <Title>{title}</Title>;
    }
    if (!title) {
      return <LogoRental width={RFValue(100)} height={RFValue(50)} />;
    }
  }

  return (
    <Container>
      {getIcoin(icon)}
      {/* <IconBack width={RFValue(100)} height={RFValue(50)} /> */}
      {logoOrTitle(title)}
      <Title>{title}</Title>
      {getIcoin(icon)}
    </Container>
  );
}
