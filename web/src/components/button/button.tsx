import React, { FC } from 'react';
import { ButtonSyles } from './button.styles';
import { IButtonProps } from './button.typings';

export const Button: FC<IButtonProps> = (props) => {
  const { title } = props;
  return (
    <ButtonSyles {...props}>
      <span>{title}</span>
    </ButtonSyles>
  );
};
