import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  width: 100%;
  padding: ${RFValue(24)}px;
`;

export const LogoContent = styled.View`
  padding-bottom: ${RFValue(47)}px;
  justify-content: center;
  align-items: center;
`;

export const TitleContent = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: ${RFValue(8)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(24)}px;
`;

export const TextContent = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: ${RFValue(40)}px;
`;

export const ForgetText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text_grey};
  text-align: center;
`;
