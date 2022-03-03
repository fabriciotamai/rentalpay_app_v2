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
  justify-content: space-around;
  align-items: center;
  padding: ${RFValue(164)}px ${RFValue(24)}px;
`;

export const LogoContent = styled.View`
  background-color: ${({theme}) => theme.colors.background_blue_light};
  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(45)}px;
`;

export const ValueContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 0px;
  margin-top: ${RFValue(40)}px;
  margin-bottom: ${RFValue(8)}px;
`;

export const SimbolText = styled.Text`
  color: ${({theme}) => theme.colors.text_grey_light};
  font-size: ${RFValue(24)}px;
  padding-right: ${RFValue(5)}px;
`;

export const ValueText = styled.Text`
  width: auto;
  color: ${({theme}) => theme.colors.primary};
  font-size: ${RFValue(32)}px;
  text-align: center;
`;

export const TextContent = styled.View`
  padding: 0px ${RFValue(31)}px;
  margin-top: ${RFValue(8)}px;
`;

export const TextInfo = styled.Text`
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
