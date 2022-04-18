import React, {
  FC,
  useCallback,
  useRef,
  useImperativeHandle,
  forwardRef,
  ForwardRefRenderFunction,
  useState,
} from 'react';

import {Container, TextInput, ButtonIcon} from './styles';

import {TextInputProps} from 'react-native';

import {SvgProps} from 'react-native-svg';

interface InputProps extends TextInputProps {
  icon?: FC<SvgProps>;
  active?:boolean;
  handlePress?: () => void;
}

interface InputRef {
  focus(): void;
}

const Input: ForwardRefRenderFunction<InputRef, InputProps> = (
  {icon: Icon, active= false, handlePress, ...rest},
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  return (
    <Container isFocused={isFocused} active={active}>
      <TextInput
        ref={inputElementRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />

      

      {Icon ? (
        <ButtonIcon onPress={handlePress}>
          <Icon />
        </ButtonIcon>
      ) : null}
    </Container>
  );
};

export default forwardRef(Input);
