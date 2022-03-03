import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.ImageBackground.attrs({
  imageStyle: {
    borderRadius: RFValue(8),
  },
})`
  width: 100%;
  height: ${RFValue(189)}px;
  align-items: center;
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: ${RFValue(8)}px;
  padding: ${RFValue(18)}px;
`;

export const TopContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const LinkCardButtom = styled.TouchableWithoutFeedback`
  align-items: center;
`;

export const LinkCardText = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_white};
  font-size: ${RFValue(10)}px;
`;

export const SpaceCard = styled.View``;

export const ShowButton = styled.TouchableWithoutFeedback``;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.shape};
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_white};
  font-size: ${RFValue(14)}px;
`;

export const Balance = styled.Text`
  font-family: ${({theme}) => theme.fonts.semi_bold};
  color: ${({theme}) => theme.colors.text_white};
  font-size: ${RFValue(32)}px;
  margin-top: ${RFValue(4)}px;
`;

export const TextCard = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_white};
  font-size: ${RFValue(10)}px;
  text-align: center;
  margin-top: ${RFValue(4)}px;
`;

export const CardButtonsContent = styled.View`
  width: 90%;
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
  width: 33%;
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
  width: 33%;
  border-right-width: ${RFValue(1)}px;
  border-right-color: #bdbdbd;
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

export const ThirdButtonContent = styled.View`
  align-items: center;
  justify-content: center;
  width: 33%;
`;

export const ThirdButton = styled.TouchableOpacity`
  align-items: center;
`;

export const ThirdButtonText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_secondary};
  font-size: ${RFValue(10)}px;

  padding: ${RFValue(4)}px;
`;
