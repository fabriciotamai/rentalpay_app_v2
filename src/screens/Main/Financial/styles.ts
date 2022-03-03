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
  /* padding-bottom: ${getStatusBarHeight() + RFValue(60)}px; */
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

export const BalanceContent = styled.View`
  width: 100%;
  align-items: center;
`;

export const BalanceText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(24)}px;
`;

export const BalanceValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.semi_bold};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(24)}px;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  margin-top: ${RFValue(24)}px;
  background-color: ${({theme}) => theme.colors.shape};
  border-top-right-radius: ${RFValue(24)}px;
  border-top-left-radius: ${RFValue(24)}px;
  /* padding: ${RFValue(24)}px; */
  padding-top: ${RFValue(20)}px;
`;

export const OptionsTab = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const AllButtom = styled.TouchableOpacity<ButtomProps>`
  align-items: center;
  width: 33.33%;
  /* border-bottom-width: ${RFValue(1)}px;
  border-bottom-color: ${({theme}) => theme.colors.background_blue_light}; */
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

export const IncomeButtom = styled.TouchableOpacity<ButtomProps>`
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

export const IncomeButtomText = styled.Text``;

export const OutComeButtom = styled.TouchableOpacity<ButtomProps>`
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

export const OutComeButtomText = styled.Text``;

export const ActivityList = styled.FlatList`
  width: 100%;
`;

export const ButtonCard = styled.TouchableOpacity`
  width: 100%;
  background-color: red;
`;
