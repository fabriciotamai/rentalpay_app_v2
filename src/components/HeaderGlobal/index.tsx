import React from 'react';
import {SvgProps} from 'react-native-svg';
import LogoRental from '../../assets/imgs/rental_pay_logo.svg';
import IconClose from '../../assets/icons/IconClosedBlack.svg'

import {RFValue} from 'react-native-responsive-fontsize';
import {TouchableOpacityProps} from 'react-native';

interface Props extends TouchableOpacityProps {
  title?: any;
  icon?: any;
  iconClose?:any;
 
}

import {Container, Button, Title} from './styles';

export function HeaderGlobal({title, icon, iconClose, ...rest}: Props) {


  function getIcoin(icon: string, iconClose:string) {
    if(icon === 'back'){
      return

    }if(icon === 'close'){
      return (
        <IconClose width={RFValue(15)} height={RFValue(50)}/>
      )
    }
  }

  function logoOrTitle(title: string) {


    if (title) {
      return <Title>{title}</Title>;
    }
    if (!title) {
      return <LogoRental width={RFValue(100)} height={RFValue(50)}  />;
    }
  }

  return (
    <Container >
      <Button {...rest}>
      {getIcoin(icon)}
      </Button>
  
      {logoOrTitle(title)}
      
      <Button {...rest}>
      
      {getIcoin(iconClose)}
      </Button>
    </Container>
  );
}
