import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  background-color: ${({theme}) => theme.colors.background_grey};
  padding: ${RFValue(9)}px;
  border-radius: ${RFValue(50)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const CoinInfo = styled.View`
  margin-left: ${RFValue(14)}px;
`;

export const CoinName = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.text_black_primary};
`;

export const Balance = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.text_secondary};
`;
