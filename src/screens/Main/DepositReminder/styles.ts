import styled, {css} from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';

interface CheckboxProps {
  active: boolean;
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

export const Space = styled.View``;

export const BackButtom = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_black_primary};
`;

export const ReminderText = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.text_light};
  font-family: ${({theme}) => theme.fonts.regular};
  margin-top: ${RFValue(34)}px;
  padding-left: ${RFValue(20)}px;
`;

export const Check = styled.View`
  margin-top: ${RFValue(40)}px;
  flex-direction: row;
  align-items: flex-start;
`;

export const Checkbox = styled.TouchableOpacity<CheckboxProps>`
  width: ${RFValue(17)}px;
  height: ${RFValue(17)}px;
  border-radius: ${RFValue(4)}px;
  border-width: ${RFValue(1)}px;
  border-color: #ccc;
  margin-top: ${RFValue(4)}px;

  ${({active, theme}) =>
    active &&
    css`
      background-color: ${theme.colors.primary};
      border-width: 0px;
    `}
`;

export const ActiveCheck = styled.View`
  width: ${RFValue(10)}px;
  height: ${RFValue(10)}px;
  border-radius: ${RFValue(1)}px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const LabelCheck = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(20)}px;
  color: ${({theme}) => theme.colors.text_light};
  font-family: ${({theme}) => theme.fonts.regular};
  margin-left: ${RFValue(10)}px;
`;

export const ContentButton = styled.View`
  margin-bottom: ${RFValue(12)}px;
`;
