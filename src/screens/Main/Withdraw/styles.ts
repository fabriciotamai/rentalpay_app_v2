import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';
import {TextInputMask} from 'react-native-masked-text';

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

export const BackButtom = styled.TouchableOpacity``;

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

export const ValueContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  margin-top: ${RFValue(40)}px;
  height: ${RFValue(65)}px;
`;

export const Simbol = styled.Text`
  color: ${({theme}) => theme.colors.text_grey_light};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(26)}px;
  padding-right: ${RFValue(5)}px;
  padding-bottom: ${RFValue(10)}px;
  line-height: ${RFValue(56)}px;
`;

export const ValueInput = styled(TextInputMask)`
  height: ${RFValue(65)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(40)}px;
  line-height: ${RFValue(40)}px;
`;

export const InfoText = styled.Text`
  text-align: center;
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-top: ${RFValue(40)}px;
`;

export const BalanceContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0px ${RFValue(10)}px;
  margin-top: ${RFValue(48)}px;
`;

export const BalanceAvailableText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(14)}px;
`;

export const BalanceValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.semi_bold};
  color: ${({theme}) => theme.colors.text_black_primary};
  font-size: ${RFValue(14)}px;
`;

export const Options = styled.View`
  margin-top: ${RFValue(42)}px;
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
  font-size: ${RFValue(18)}px;
  margin-bottom: ${RFValue(2)}px;
`;

export const OptionName = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_light};
  font-size: ${RFValue(14)}px;
`;

export const RadioButton = styled.View`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  border-radius: ${RFValue(20)}px;
  border-color: ${({theme}) => theme.colors.primary};
  border-width: 1px;
  align-items: center;
  justify-content: center;
`;

export const RadioCheck = styled.View`
  width: ${RFValue(12)}px;
  height: ${RFValue(12)}px;
  border-radius: ${RFValue(12)}px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const OptionText = styled.Text``;

export const ContentButton = styled.View`
  margin-bottom: ${RFValue(12)}px;
`;
