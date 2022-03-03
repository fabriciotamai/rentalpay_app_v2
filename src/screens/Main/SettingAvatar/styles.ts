import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

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

export const ItensContent = styled.View`
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(116)}px;
  height: ${RFValue(116)}px;
  border-radius: ${RFValue(116)}px;
  margin-top: ${RFValue(38)}px;
`;

export const ChangeButtom = styled.TouchableOpacity`
  /* align-items: center; */
`;

export const ChangeText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.primary};
  font-size: ${RFValue(16)}px;
  margin-top: ${RFValue(23)}px;
`;

export const ContentButton = styled.View`
  margin-bottom: ${RFValue(12)}px;
`;
