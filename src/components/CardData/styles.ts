import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

interface Props {
  type: 'positive' | 'negative';
}

interface ContainerProps {
  back: number;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  background-color: ${({theme, back}) =>
    back % 2 === 0 ? theme.colors.background : theme.colors.background_grey};
  padding-top: ${RFValue(15)}px;
  padding: ${RFValue(14)}px;
  padding-bottom: ${RFValue(20)}px;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`;
export const LeftContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InfoContent = styled.View`
  margin-left: ${RFValue(14)}px;
`;

export const User = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.primary};
  line-height: ${RFValue(20)}px;
`;

export const Date = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.text_grey_dark};
  line-height: ${RFValue(20)}px;
`;

export const RightContent = styled.View`
  align-items: flex-end;
`;

export const Value = styled.Text<Props>`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({theme, type}) =>
    type === 'negative' ? theme.colors.text_danger : theme.colors.text_success};
  line-height: ${RFValue(20)}px;
`;

export const Description = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(10)}px;
  color: ${({theme}) => theme.colors.text_grey_dark};
  line-height: ${RFValue(20)}px;
`;
