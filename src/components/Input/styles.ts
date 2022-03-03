import styled, {css} from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

interface Props {
  isFocused: boolean;
}

export const Container = styled.View<Props>`
  width: 100%;
  height: ${RFValue(56)}px;
  padding: 0 ${RFValue(20)}px;
  background-color: ${({theme}) => theme.colors.background};
  border-radius: ${RFValue(8)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-bottom: ${RFValue(16)}px;
  border-width: ${RFValue(1)}px;
  border-color: ${({theme}) => theme.colors.background};
  ${({isFocused, theme}) =>
    isFocused &&
    css`
      border-color: ${theme.colors.primary};
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${({theme}) => theme.colors.text_secondary};
  font-size: ${RFValue(14)}px;
`;

export const ButtonIcon = styled.TouchableOpacity``;
