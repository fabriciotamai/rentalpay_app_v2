import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 0px ${RFValue(24)}px;
  padding-top: ${getStatusBarHeight()}px;
  background-color: ${({theme}) => theme.colors.background};
`;

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

export const SubTitlesContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(64)}px;
  margin-bottom: ${RFValue(17)}px;
`;

export const SubTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.text_black_primary};
`;

export const SeeAllButton = styled.TouchableOpacity``;

export const SeeAll = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.primary};
`;

export const CardCoinsContent = styled.FlatList.attrs({
  horizontal: false,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {},
})`
  width: 100%;
`;
