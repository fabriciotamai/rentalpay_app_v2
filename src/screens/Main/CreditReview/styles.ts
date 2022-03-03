import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
  padding-top: ${getStatusBarHeight() + RFValue(10)}px;
`;

export const Content = styled.ScrollView`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.shape};
  border-top-right-radius: ${RFValue(24)}px;
  border-top-left-radius: ${RFValue(24)}px;
  padding: ${RFValue(24)}px;
  padding-top: ${RFValue(48)}px;
  /* flex: 1; */
  /* flex-direction: column;
  justify-content: space-between; */
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
  margin-top: ${RFValue(42)}px;
  line-height: ${RFValue(27)}px;
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
  font-size: ${RFValue(36)}px;
  padding-right: ${RFValue(5)}px;
  padding-bottom: ${RFValue(15)}px;
  line-height: ${RFValue(56)}px;
`;

export const ValueInput = styled.TextInput`
  height: ${RFValue(65)}px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(56)}px;
  line-height: ${RFValue(56)}px;
`;

export const Options = styled.View`
  margin-top: ${RFValue(27)}px;
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

export const DataContent = styled.View`
  width: 100%;
  padding: 0px ${RFValue(5)}px;
  margin-top: ${RFValue(16)}px;
`;

export const ContractContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContractText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(24)}px;
`;

export const ContractValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.semi_bold};
  color: ${({theme}) => theme.colors.text_black_primary};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(24)}px;
`;

export const LimitContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${RFValue(16)}px;
`;

export const LimitText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(24)}px;
`;

export const LimitValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.semi_bold};
  color: ${({theme}) => theme.colors.text_black_primary};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(24)}px;
`;

export const DataContentList = styled.View`
  /* flex: 1; */
  /* height: 200px; */
  margin-top: ${RFValue(34)}px;
  padding-bottom: ${RFValue(230)}px;
`;

export const SolicitationContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(12)}px 0px;
  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: ${({theme}) => theme.colors.background_blue_light};
`;

export const SolicitationText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(13)}px;
`;

export const SolicitationValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_black_primary};
  font-size: ${RFValue(15)}px;
`;

export const FeeContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(12)}px 0px;
  padding-top: ${RFValue(20)}px;
  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: ${({theme}) => theme.colors.background_blue_light};
`;

export const FeeText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(13)}px;
`;

export const FeeValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_black_primary};
  font-size: ${RFValue(15)}px;
`;

export const ParcelContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(12)}px 0px;
  padding-top: ${RFValue(20)}px;
  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: ${({theme}) => theme.colors.background_blue_light};
`;

export const ParcelText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(13)}px;
`;

export const ParcelValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_black_primary};
  font-size: ${RFValue(15)}px;
`;
export const ValidateContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(12)}px 0px;
  padding-top: ${RFValue(20)}px;
  border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: ${({theme}) => theme.colors.background_blue_light};
`;

export const ValidateText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(13)}px;
`;

export const ValidateValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_black_primary};
  font-size: ${RFValue(15)}px;
`;
export const TotalPayContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(12)}px 0px;
  padding-top: ${RFValue(20)}px;
`;

export const TotalPayText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(13)}px;
`;

export const TotalPayValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_black_primary};
  font-size: ${RFValue(15)}px;
`;

export const ContentButton = styled.View`
  /* margin-bottom: ${RFValue(12)}px; */
  margin-top: ${RFValue(50)}px;
`;
