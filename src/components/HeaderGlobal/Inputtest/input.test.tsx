import React from 'react';

import { render } from '@testing-library/react-native';
import { Inputtest } from './index';
import { ThemeProvider} from 'styled-components/native';
import theme from '../../../global/styles/theme';

import { RFValue} from 'react-native-responsive-fontsize';

const Providers:React.FC = ({children}) => (
    <ThemeProvider theme={theme}>
        {children}
    
    </ThemeProvider>)


describe('input component', () => {
    it('must have specefic border color when active ', () => {
        const {getByTestId} = render(
            <Inputtest
            testID="input-email"
            placeholder="E-email"
            keyboardType="email-address"
            active={true}
            />, {

                wrapper:Providers
            }


        )

        const inputElement = getByTestId('input-email');
        expect(inputElement.props.style[0].borderColor).toEqual('#006DB7');
    })
})