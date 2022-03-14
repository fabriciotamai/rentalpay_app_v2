import React from 'react';


import { TextInputProps } from 'react-native';

import { Container} from './styles';

interface Props extends TextInputProps {
    active?:boolean;

}

    export function Inputtest({active = false, ...rest} : Props){
        return(
        <Container testID="input-email" active={active}>

        </Container>)
    }
