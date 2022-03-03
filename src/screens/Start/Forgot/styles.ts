import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';

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
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Space = styled.View``;

export const BackButtom = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_black_primary};
`;

export const ForgotText = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.text_light};
  font-family: ${({theme}) => theme.fonts.regular};
  margin-top: ${RFValue(43)}px;
  line-height: ${RFValue(30)}px;
`;

export const Form = styled.View`
  margin-top: ${RFValue(16)}px;
`;

export const ContentButton = styled.View`
  margin-top: ${RFValue(116)}px;
`;
