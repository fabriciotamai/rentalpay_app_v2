import React from 'react';

import { Container, Error } from './styles';

import { TextInputProps } from 'react-native';
import { Control, useController, Controller } from 'react-hook-form';

import Input from '../Input';

interface Props extends TextInputProps {
    control: Control;
    name: string;

}


export function InputForm({
    control,
    name,
    ...rest
}: Props) {
    return (
        <Container>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input onChangeText={onChange} value={value}
                        {...rest}
                    />

                )}

                name={name}
            />
            <Error/>
 </Container>
    )
}