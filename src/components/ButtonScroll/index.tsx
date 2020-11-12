import React from 'react';

import { Button } from './styles';
import { Props } from './types';

const ButtonScroll: React.FC<Props> = ({ children, onClick }) => (
  <Button onClick={onClick}>{children}</Button>
);

export default ButtonScroll;
