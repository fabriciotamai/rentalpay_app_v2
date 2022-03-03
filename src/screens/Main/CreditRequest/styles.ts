import styled, {css} from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';

interface OptionProps {
  isActive: boolean;
}

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

export const SubTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_black_primary};
  margin-top: ${RFValue(24)}px;
`;

export const Options = styled.View``;

export const OptionContent = styled.View<OptionProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(24)}px;
  padding: ${RFValue(15)}px ${RFValue(30)}px;
  border: ${RFValue(1.5)}px solid
    ${({theme}) => theme.colors.background_blue_light};
  ${({isActive}) =>
    isActive &&
    css`
      border-top-right-radius: ${RFValue(12)}px;
      border-top-left-radius: ${RFValue(12)}px;
    `}

  ${({isActive}) =>
    !isActive &&
    css`
      border-radius: ${RFValue(12)}px;
    `}
`;

export const OptionInfos = styled.View``;

export const OptionTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_black};
  font-size: ${RFValue(16)}px;
  margin-bottom: ${RFValue(2)}px;
`;

export const OptionName = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(14)}px;
`;

export const OptionText = styled.Text``;

export const InfoText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(20)}px;
  margin-top: ${RFValue(16)}px;
  margin-left: ${RFValue(4)}px;
`;

export const ButtonDropContent = styled.TouchableWithoutFeedback``;

export const OptionsData = styled.View`
  background-color: ${({theme}) => theme.colors.background_grey_light};
  padding: ${RFValue(20)}px ${RFValue(27)}px;
  border-bottom-right-radius: ${RFValue(12)}px;
  border-bottom-left-radius: ${RFValue(12)}px;

  border: ${RFValue(1.5)}px solid
    ${({theme}) => theme.colors.background_blue_light};
  border-top-width: ${RFValue(0)}px;
`;

export const OptionItemButton = styled.TouchableWithoutFeedback``;

export const OptionItem = styled.Text`
  margin-bottom: ${RFValue(8)}px;
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
`;

export const ContentButton = styled.View`
  margin-bottom: ${RFValue(12)}px;
`;
