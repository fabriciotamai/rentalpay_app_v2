import styled,{css} from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue} from 'react-native-responsive-fontsize';


interface Props {
    active:boolean;

}

export const Container = styled(TextInput)<Props>`


${({active, theme }) => active && css`
border-width:3px;
border-color:${theme.colors.primary};




` };

`;
