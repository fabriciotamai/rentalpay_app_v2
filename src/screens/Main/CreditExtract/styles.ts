import styled, {css} from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {RFValue} from 'react-native-responsive-fontsize';

interface ButtomProps {
  isActive: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
  padding-top: ${getStatusBarHeight() + RFValue(20)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(20)}px;
`;

export const Space = styled.View``;

export const BackButtom = styled.TouchableOpacity`
  color: ${({theme}) => theme.colors.background_grey_light};
`;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.background_grey_light};
`;

export const LogoContent = styled.View`
  align-items: center;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  margin-top: ${RFValue(38)}px;
  background-color: ${({theme}) => theme.colors.shape};
  border-top-right-radius: ${RFValue(24)}px;
  border-top-left-radius: ${RFValue(24)}px;
  padding-top: ${RFValue(20)}px;
`;

export const OptionsTab = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const AllButtom = styled.TouchableOpacity<ButtomProps>`
  align-items: center;
  width: 33.33%;
  padding-bottom: ${RFValue(10)}px;

  ${({isActive}) =>
    isActive &&
    css`
      border-bottom-color: ${({theme}) => theme.colors.primary_light};
      border-bottom-width: ${RFValue(2)}px;
    `};

  ${({isActive}) =>
    !isActive &&
    css`
      border-bottom-color: ${({theme}) => theme.colors.background_blue_light};
      border-bottom-width: ${RFValue(1)}px;
    `};
`;

export const AllButtomText = styled.Text``;

export const RequestButtom = styled.TouchableOpacity<ButtomProps>`
  align-items: center;
  width: 33.33%;
  padding-bottom: ${RFValue(10)}px;

  ${({isActive}) =>
    isActive &&
    css`
      border-bottom-color: ${({theme}) => theme.colors.primary};
      border-bottom-width: ${RFValue(2)}px;
    `};

  ${({isActive}) =>
    !isActive &&
    css`
      border-bottom-color: ${({theme}) => theme.colors.background_blue_light};
      border-bottom-width: ${RFValue(1)}px;
    `};
`;

export const RequestButtomText = styled.Text``;

export const PaymentButtom = styled.TouchableOpacity<ButtomProps>`
  align-items: center;
  width: 33.33%;
  padding-bottom: ${RFValue(10)}px;

  ${({isActive}) =>
    isActive &&
    css`
      border-bottom-color: ${({theme}) => theme.colors.primary};
      border-bottom-width: ${RFValue(2)}px;
    `};

  ${({isActive}) =>
    !isActive &&
    css`
      border-bottom-color: ${({theme}) => theme.colors.background_blue_light};
      border-bottom-width: ${RFValue(1)}px;
    `};
`;

export const PaymentButtomText = styled.Text``;

export const ActivityList = styled.FlatList`
  width: 100%;
  margin-bottom: ${RFValue(140)}px;
`;
