import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  /* padding-top: ${getStatusBarHeight()}px; */
`;
export const Content = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.shape};
  border-top-right-radius: ${RFValue(24)}px;
  border-top-left-radius: ${RFValue(24)}px;
  padding: ${RFValue(30)}px ${RFValue(24)}px;
  /* padding-top: ${RFValue(48)}px; */
  justify-content: space-between;
`;

export const Wrapper = styled.View``;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${RFValue(24)}px 0;
`;

export const ItensContent = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HeaderIcon = styled.View``;

export const HeaderTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(22)}px;
  color: ${({theme}) => theme.colors.text_black_primary};
  margin-left: ${RFValue(42)}px;
`;

export const HeaderPicture = styled.Image`
  width: ${RFValue(35)}px;
  height: ${RFValue(35)}px;
  border-radius: ${RFValue(50)}px;
`;

export const DataContent = styled.View`
  margin-top: ${RFValue(11)}px;
`;

export const FirstTitleContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(12)}px ${RFValue(10)}px;
  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: ${({theme}) => theme.colors.background_grey_light};
  background-color: ${({theme}) => theme.colors.background_grey_light};
`;

export const FirstTitleText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_black_primary};
  font-size: ${RFValue(10)}px;
`;

export const SecondTitleContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(12)}px ${RFValue(10)}px;
  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: ${({theme}) => theme.colors.background_grey_light};
  background-color: ${({theme}) => theme.colors.background_grey_light};
`;

export const SecondTitleText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_black_primary};
  font-size: ${RFValue(10)}px;
`;

export const ChangeAvatarContent = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(12)}px ${RFValue(10)}px;
  padding-top: ${RFValue(20)}px;
  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: ${({theme}) => theme.colors.background_blue_light};
`;

export const ChangeAvatarText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(10)}px;
`;

export const ChangeAvatarValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(10)}px;
`;
export const DefaultCoinContent = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(12)}px ${RFValue(10)}px;
  padding-top: ${RFValue(20)}px;
  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: ${({theme}) => theme.colors.background_blue_light};
`;

export const AlignContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DefaultCoinText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(10)}px;
`;

export const DefaultCoinValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(10)}px;
  padding-right: ${RFValue(15)}px;
`;

export const RegisterContent = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(12)}px ${RFValue(10)}px;
  padding-top: ${RFValue(20)}px;
  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: ${({theme}) => theme.colors.background_blue_light};
`;

export const RegisterText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(10)}px;
`;

export const LanguageContent = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(12)}px ${RFValue(10)}px;
  padding-top: ${RFValue(20)}px;
  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: ${({theme}) => theme.colors.background_blue_light};
`;

export const LanguageText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(10)}px;
`;

export const LanguageValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(10)}px;
  padding-right: ${RFValue(15)}px;
`;
export const AddressContent = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(12)}px ${RFValue(10)}px;
  padding-top: ${RFValue(20)}px;
  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: ${({theme}) => theme.colors.background_blue_light};
`;

export const AddressText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(10)}px;
`;
export const TimeZoneContent = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(12)}px ${RFValue(10)}px;
  padding-top: ${RFValue(20)}px;
  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: ${({theme}) => theme.colors.background_blue_light};
`;

export const TimeZoneText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(10)}px;
`;

export const TimeZoneValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(10)}px;
  padding-right: ${RFValue(15)}px;
`;
export const TwoFAContent = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(12)}px ${RFValue(10)}px;
  padding-top: ${RFValue(20)}px;
`;

export const TwoFAText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(10)}px;
`;
export const PrivacyContent = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(12)}px ${RFValue(10)}px;
  padding-top: ${RFValue(20)}px;
`;

export const PrivacyText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(10)}px;
`;

export const ContentButton = styled.View`
  margin-bottom: ${RFValue(6)}px;
`;
