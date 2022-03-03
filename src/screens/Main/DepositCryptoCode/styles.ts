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

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButtom = styled.TouchableWithoutFeedback``;

export const ArrowLeft = styled.View``;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_black_primary};
`;

export const Space = styled.View``;

export const Wrapper = styled.ScrollView`
  width: 100%;
  padding-top: ${RFValue(27)}px;
`;

export const Options = styled.View`
  width: 100%;
`;

export const OptionContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(8)}px;
  padding: ${RFValue(15)}px ${RFValue(30)}px;
  border: ${RFValue(1.5)}px solid
    ${({theme}) => theme.colors.background_blue_light};
  border-radius: ${RFValue(12)}px;
  background-color: ${({theme}) => theme.colors.background};
  opacity: 0.5;
`;

export const OptionInfos = styled.View``;

export const OptionTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_light};
  font-size: ${RFValue(16)}px;
  margin-bottom: ${RFValue(2)}px;
`;

export const OptionName = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_light};
  font-size: ${RFValue(14)}px;
`;

export const OptionText = styled.Text``;

export const BalanceContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${RFValue(16)}px;
`;

export const BalanceText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(24)}px;
`;

export const BalanceValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.semi_bold};
  color: ${({theme}) => theme.colors.text_black_primary};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(24)}px;
`;

export const SubTitle = styled.Text`
  width: 100%;
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_black_primary};
  margin-top: ${RFValue(31)}px;
`;
export const InfoText = styled.Text`
  width: 100%;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(20)}px;
  margin-top: ${RFValue(16)}px;
`;
export const CodeContent = styled.View`
  flex-direction: row;
  width: 100%;
  padding: ${RFValue(12)}px ${RFValue(15)}px;
  border: ${RFValue(1.5)}px solid ${({theme}) => theme.colors.border_grey};
  border-radius: ${RFValue(12)}px;
  margin-top: ${RFValue(38)}px;
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

export const CodeLabel = styled.Text`
  color: ${({theme}) => theme.colors.text_grey_dark};
`;

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
  align-self: center;
  justify-content: center;
  align-items: center;
  border: ${RFValue(16)}px solid
    ${({theme}) => theme.colors.background_grey_light};

  padding: ${RFValue(35)}px;
  border-radius: ${RFValue(32)}px;
  margin-top: ${RFValue(46)}px;
`;
