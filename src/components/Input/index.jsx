import React, { forwardRef } from 'react';
import { IconContainer, InputContainer, InputText, ErrorText } from './styles';
import { Controller } from 'react-hook-form';

const Input = forwardRef(({ leftIcon, name, control, errorMessage, ...rest }, ref) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} ref={ref} {...rest} />}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
});

export default Input;
