import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
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
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButtom = styled.TouchableOpacity``;

export const ArrowLeft = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_black_primary};
`;

export const Space = styled.View``;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  padding-top: ${RFValue(20)}px;
  align-items: center;
`;

export const CodeContent = styled.View`
  flex-direction: row;
  width: 100%;
  padding: ${RFValue(12)}px ${RFValue(15)}px;
  border: ${RFValue(1.5)}px solid ${({theme}) => theme.colors.border_grey};
  border-radius: ${RFValue(12)}px;
`;

export const DataContent = styled.View`
  flex: 1;
  width: 60%;
  justify-content: center;
  border-right-width: ${RFValue(1)}px;
  border-right-color: ${({theme}) => theme.colors.border_grey};

  padding-right: ${RFValue(15)}px;
`;

export const OrLoogo = styled.View``;

export const CodeText = styled.Text`
  margin-top: ${RFValue(5)}px;
`;

export const CopyButtonContent = styled.View`
  width: 40%;
  justify-content: center;
  align-items: center;
`;

export const CopyButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f8fafc;
  padding: ${RFValue(12)}px;
  border-radius: ${RFValue(8)}px;
`;

export const CopyIcon = styled.View``;

export const CopyText = styled.Text``;

export const QRCodeContent = styled.View`
  border: ${RFValue(16)}px solid
    ${({theme}) => theme.colors.background_grey_light};

  padding: ${RFValue(35)}px;
  border-radius: ${RFValue(32)}px;
`;

export const ValueContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;

export const SimbolText = styled.Text`
  color: ${({theme}) => theme.colors.text_grey_light};
  font-size: ${RFValue(20)}px;
  padding-right: ${RFValue(5)}px;
`;

export const ValueText = styled.Text`
  width: auto;
  color: ${({theme}) => theme.colors.primary};
  font-size: ${RFValue(32)}px;
  text-align: center;
`;

export const ButtonAdvanceContent = styled.View`
  width: 100%;
  margin-bottom: ${RFValue(36)}px;
`;

export const QrCodeView = styled(QRCode)`

`;
