import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled, {css} from 'styled-components/native';

interface PayProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
  padding-top: ${getStatusBarHeight() + RFValue(10)}px;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.shape};
  border-top-right-radius: ${RFValue(24)}px;
  border-top-left-radius: ${RFValue(24)}px;
  padding: ${RFValue(24)}px;
  padding-top: ${RFValue(48)}px;
  justify-content: space-between;
`;

export const Wrapper = styled.View``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButtom = styled.TouchableWithoutFeedback``;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_black_primary};
`;

export const Space = styled.View``;

export const ContentButton = styled.View`
  margin-bottom: ${RFValue(12)}px;
  align-items: center;
`;
export const ButtonScanner = styled.TouchableOpacity`
  width: ${RFValue(80)}px;
  height: ${RFValue(80)}px;
  padding: ${RFValue(25)}px;
  border-radius: ${RFValue(80)}px;
  background-color: ${({theme}) => theme.colors.primary_light};
`;

export const Teste = styled.Text``;
