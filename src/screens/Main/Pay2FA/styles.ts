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

export const ValueContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: ${RFValue(36)}px;
`;

export const SimbolText = styled.Text`
  color: ${({theme}) => theme.colors.text_grey_light};
  font-size: ${RFValue(24)}px;
  padding-right: ${RFValue(5)}px;
`;

export const ValueText = styled.Text`
  width: auto;
  color: ${({theme}) => theme.colors.primary};
  font-size: ${RFValue(24)}px;
  text-align: center;
`;

export const Form = styled.View`
  margin-top: ${RFValue(36)}px;
`;

export const ContentButton = styled.View`
  margin-top: ${RFValue(36)}px;
`;
