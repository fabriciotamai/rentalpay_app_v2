import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.shape};
`;
export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding: ${RFValue(24)}px;
  padding-top: ${getStatusBarHeight() + RFValue(24)}px;
  justify-content: space-between;
`;

export const HeaderContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Space = styled.View``;

export const ImgContent = styled.View`
  margin-top: ${RFValue(24)}px;
`;

export const FirstSwiper = styled.View``;

export const TextContent = styled.View`
  align-items: center;
  margin-top: ${RFValue(64)}px;
`;

export const TitleText = styled.Text`
  text-align: center;
  font-family: ${({theme}) => theme.fonts.semi_bold};
  color: ${({theme}) => theme.colors.text_black_primary};
  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(32)}px;
`;

export const InfoText = styled.Text`
  text-align: center;
  margin-top: ${RFValue(8)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16)}px;
`;

export const SecondSwiper = styled.View``;

export const AdvanceButton = styled.TouchableWithoutFeedback``;

export const AdvanceButtonText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.primary};
  font-size: ${RFValue(14)}px;
`;

export const ButtonContent = styled.View`
  margin-bottom: ${RFValue(60)}px;
`;
