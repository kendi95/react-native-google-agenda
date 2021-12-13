import React, { FC } from 'react';

interface HeaderProps {
  buttonLeft?: JSX.Element;
  buttonsRight?: Array<JSX.Element>;
}

export const Header: FC<HeaderProps>;
