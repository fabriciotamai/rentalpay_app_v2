import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

interface IconProps {
  sumPin: string;
  pin1: string;
  pin2: string;
  pin3: string;
  pin4: string;
  pin5: string;
  pin6: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  justify-content: space-between;
`;

export const Content = styled.View``;

export const ContentTitle = styled.View`
  align-items: center;
  padding: ${RFValue(30)}px;
  padding-bottom: ${RFValue(50)}px;
`;
export const Header = styled.View`
  justify-content: space-around;
`;

export const TextTitle = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-size: ${RFValue(18)}px;
`;

export const ContentPin = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.primary};
  border-top-right-radius: ${RFValue(40)}px;
  border-top-left-radius: ${RFValue(40)}px;
`;

export const ContentButtonsPin = styled.View`
padding: ${RFValue(20)}px ${RFValue(24)}px};
margin-bottom: ${RFValue(60)}px;

justify-content: center;
flex-direction: row
flex-wrap: wrap;
`;

export const TextBtn = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  text-align: center;
  color: ${({theme}) => theme.colors.primary};
`;

export const TextBtnWhite = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
  text-align: center;
  color: ${({theme}) => theme.colors.background};
`;

export const ButtonSelectPin = styled.TouchableOpacity`
  width: ${RFValue(62)}px;
  height: ${RFValue(62)}px;
  margin: ${RFValue(10)}px ${RFValue(10)}px};
  
  background-color: ${({theme}) => theme.colors.background};
  border-radius: ${RFValue(42)}px;
  align-items: center;
  justify-content: center;
`;
export const ButtonDisable = styled.TouchableOpacity`
  width: ${RFValue(62)}px;
  height: ${RFValue(62)}px;
  margin: ${RFValue(10)}px ${RFValue(10)}px};

  border-radius: ${RFValue(42)}px;
  align-items: center;
  justify-content: center;
`;

export const CardLogo = styled.View`
  align-items: center;
  padding-top: ${getStatusBarHeight() + RFValue(50)}px;
`;

export const SelectPin = styled.View<IconProps>`
  width: ${RFValue(12)}px;
  height: ${RFValue(12)}px;
  margin: 0 5px;
  border: #006db7;
  border-color: ${({theme}) => theme.colors.primary};

  ${props =>
    props.pin1 &&
    css`
      background-color: ${({theme}) => theme.colors.primary};
    `}

  ${props =>
    props.pin2 &&
    css`
      background-color: ${({theme}) => theme.colors.primary};
    `}
    ${props =>
    props.pin3 &&
    css`
      background-color: ${({theme}) => theme.colors.primary};
    `}
    ${props =>
    props.pin4 &&
    css`
      background-color: ${({theme}) => theme.colors.primary};
    `}
    ${props =>
    props.pin5 &&
    css`
      background-color: ${({theme}) => theme.colors.primary};
    `}
    ${props =>
    props.pin6 &&
    css`
      background-color: ${({theme}) => theme.colors.primary};
    `}
  border-radius: ${RFValue(20)}px;
`;
export const SelectPinDisable = styled.View`
  width: ${RFValue(12)}px;
  margin: 0 5px;
  height: ${RFValue(12)}px;
  background-color: ${({theme}) => theme.colors.background};
  border: 1px solid;
  border-color: ${({theme}) => theme.colors.primary};
  border-radius: ${RFValue(20)}px;
`;

export const CardSelectPin = styled.View<IconProps>`
  flex-direction: row;

  justify-content: center;
`;
