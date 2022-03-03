import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.shape};
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(211)}px ${RFValue(24)}px;
`;

export const LogoContent = styled.View`
  background-color: ${({theme}) => theme.colors.background_blue_light};
  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(45)}px;
  margin-bottom: ${RFValue(40)}px;
`;

export const TextContent = styled.View``;

export const InfoText = styled.Text`
font-size: ${RFValue(14)}px
  color: ${({theme}) => theme.colors.text_grey_dark};
  line-height: ${RFValue(20)}px;
  text-align: center;
`;

export const ButtonContent = styled.View`
  width: 100%;
  margin-top: ${RFValue(60)}px;
`;

export const FirstButtonContent = styled.View``;

export const SecondButtonContent = styled.View`
  margin-top: ${RFValue(16)}px;
`;
