import styled, {css} from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

interface Props {
  type: 'primary' | 'secondary';
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: ${RFValue(56)}px;
  background-color: ${({theme}) => theme.colors.primary_light};
  border-radius: ${RFValue(80)}px;

  justify-content: center;
  align-items: center;

  ${({type}) =>
    type === 'secondary' &&
    css`
      background-color: ${({theme}) => theme.colors.background_grey_light};
    `}
`;

export const Title = styled.Text<Props>`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.medium};

  ${({type}) =>
    type === 'secondary' &&
    css`
      color: ${({theme}) => theme.colors.primary};
    `}
`;
