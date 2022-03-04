import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
flex-direction:row;
align-items:center;
padding: 0 40px;

width:100%;
justify-content:space-between;

`;

export const Button = styled.TouchableOpacity`
width:${RFValue(20)}px;

`;
export const Title = styled.Text`
/* color:'#000'; */

`;

