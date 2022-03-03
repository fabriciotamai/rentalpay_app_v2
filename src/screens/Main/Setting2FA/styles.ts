import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import QRCode from 'react-native-qrcode-svg'

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

export const InfoText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(20)}px;
  margin-top: ${RFValue(16)}px;
  margin-left: ${RFValue(4)}px;
`;

export const SubTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_black_primary};
  margin-top: ${RFValue(54)}px;
`;

export const QrCodeContent = styled.View`
  align-items: center;
  margin-top: ${RFValue(24)}px;
`;

export const ImgContent = styled.View`
  padding: ${RFValue(20)}px;
`;

export const QrCodeText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey};
`;

export const CopyButtonContent = styled.View`
  width: 100%;
  padding: 0px ${RFValue(45)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CopyButton = styled.View``;

export const InputContent = styled.View`
  margin-top: ${RFValue(24)}px;
`;

export const ContentButton = styled.View`
  margin-bottom: ${RFValue(12)}px;
`;

export const QrCode = styled(QRCode)`

`;
