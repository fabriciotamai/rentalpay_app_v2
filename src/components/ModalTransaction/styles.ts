import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const ModalView = styled.View`
  width: 90%;

  align-self: center;
  padding: ${RFValue(27)}px;
  border-radius: ${RFValue(16)}px;

  background-color: ${({theme}) => theme.colors.shape};
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${RFValue(23)}px;
`;

export const HeaderTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_black};
  font-size: ${RFValue(14)}px;
`;

export const ModalContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: ${RFValue(12)}px;
`;

export const ModalTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_black_bold};
  font-size: ${RFValue(12)}px;
`;

export const ModalValue = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(12)}px;
`;

export const ModalFooter = styled.View`
  margin-top: ${RFValue(19)}px;
  border-top-width: ${RFValue(1)}px;
  border-top-color: ${({theme}) => theme.colors.background_blue_light};
  padding-top: ${RFValue(18)}px;
  margin-bottom: ${RFValue(26)}px;
`;

export const FooterTitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text_black_bold};
  font-size: ${RFValue(12)}px;
`;

export const FooterText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text_grey_dark};
  font-size: ${RFValue(12)}px;
  margin-top: ${RFValue(3)}px;
`;

export const ModalClose = styled.TouchableWithoutFeedback`
  align-items: center;
  margin-top: ${RFValue(26)}px;
`;

export const ModalCloseText = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.background_blue_light};
  font-size: ${RFValue(12)}px;
  margin-top: ${RFValue(3)}px;
  text-align: center;
`;
