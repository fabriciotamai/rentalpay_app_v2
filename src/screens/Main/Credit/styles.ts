import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';
import {TextInputMask} from 'react-native-masked-text';



export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  padding: 0px ${RFValue(24)}px;
  padding-top: ${getStatusBarHeight()}px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const CardCredit = styled.ImageBackground`
  width: 100%;
  height: ${RFValue(189)}px;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: ${RFValue(8)}px;
  padding: ${RFValue(18)}px;
  padding-top: ${RFValue(53)}px;
`;

export const TextCard = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_white};
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(16)}px;
  text-align: center;
  margin-top: ${RFValue(25)}px;
`;

export const CardButtonsContent = styled.View`
  /* width: 90%; */
  height: ${RFValue(65)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: ${RFValue(16)}px;
  position: absolute;
  bottom: -${RFValue(32.5)}px;
  background-color: ${({theme}) => theme.colors.shape};
`;

export const FirstButtonContent = styled.View`
  align-items: center;
  justify-content: center;
  width: 50%;
  border-right-width: ${RFValue(1)}px;
  border-right-color: #bdbdbd;
`;

export const FirstButton = styled.TouchableOpacity`
  align-items: center;
`;

export const FirstButtonText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_secondary};
  font-size: ${RFValue(10)}px;

  padding: ${RFValue(4)}px;
`;

export const SecondButtonContent = styled.View`
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const SecondButton = styled.TouchableOpacity`
  align-items: center;
`;

export const SecondButtonText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_secondary};
  font-size: ${RFValue(10)}px;

  padding: ${RFValue(4)}px;
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

export const CardData = styled.View`
  width: 100%;
  height: ${RFValue(200)}px;
  /* align-items: center; */
  justify-content: space-between;
  /* background-color: #8d9091; */
  /* border-radius: ${RFValue(8)}px; */
  /* padding: 0px ${RFValue(30)}px; */
  /* padding-top: ${RFValue(20)}px; */
  /* padding-bottom: ${RFValue(13)}px; */
`;

export const HeaderContent = styled(LinearGradient).attrs({
  colors: ['#8d9091bd', '#4040404d'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})`
  /* flex: 1; */
  border-top-left-radius: ${RFValue(25)}px;
  border-top-right-radius: ${RFValue(25)}px;
  padding: ${RFValue(24)}px;
`;

export const StartContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* padding: 0px ${RFValue(24)}px; */
`;

export const ValueContent = styled.View``;

export const ValueText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(14)}px;
`;

export const BalanceText = styled(TextInputMask)`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(24)}px;
`;

export const CenterContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFValue(27)}px;
  /* padding: 0px ${RFValue(24)}px; */
`;

export const LimitContent = styled.View``;

export const LimitText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(12)}px;
`;

export const LimitValueText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16)}px;
`;

export const ContractContent = styled.View``;

export const ContractText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(12)}px;
`;

export const ContractValueText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16)}px;
`;

export const ValidateContent = styled.View``;

export const ValidateText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(12)}px;
`;

export const ValidateValueText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(16)}px;
`;

export const FooterContent = styled(LinearGradient).attrs({
  colors: ['#a1a4a5db', '#6060604d'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})`
  width: 100%;
  padding: 0px ${RFValue(24)}px;
  height: ${RFValue(60)}px;
  justify-content: center;
  border-bottom-left-radius: ${RFValue(25)}px;
  border-bottom-right-radius: ${RFValue(25)}px;
`;

export const TokenText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(12)}px;
`;

export const TokenValueText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(20)}px;
`;
