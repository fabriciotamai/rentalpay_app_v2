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
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const Wrapper = styled.View``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Space = styled.View``;

export const BackButtom = styled.TouchableWithoutFeedback``;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_black_primary};
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_black_primary};
  margin-top: ${RFValue(20)}px;
`;

export const ReceiverText = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.text_light};
  font-family: ${({theme}) => theme.fonts.regular};
  margin-top: ${RFValue(7)}px;
  line-height: ${RFValue(19)}px;
`;

export const ValueContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin-top: ${RFValue(74)}px;
  height: ${RFValue(65)}px;
`;

export const Simbol = styled.Text`
  color: ${({theme}) => theme.colors.text_grey_light};
  font-size: ${RFValue(25)}px;
  padding-right: ${RFValue(5)}px;
  padding-bottom: ${RFValue(15)}px;
`;

export const ValueInput = styled.TextInput`
  height: ${RFValue(65)}px;
  color: ${({theme}) => theme.colors.primary};
  font-size: ${RFValue(36)}px;
`;

export const ContentButton = styled.View`
  margin-bottom: ${RFValue(12)}px;
`;

export const ButtonTeste = styled.TouchableOpacity``;

export const ButtonTesteText = styled.Text``;
