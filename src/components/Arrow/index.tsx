import React from 'react';
import { Props } from './types';

import { Container } from './styles';

const Arrow: React.FC<Props> = ({ up }) => (
  <Container up={up}>
    <svg className="gUZ erh U9O kVc" height="24" width="24" viewBox="0 0 24 24" aria-label="Arrow" role="img"><path d="M12 19.5L.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z" /></svg>
  </Container>
);

export default Arrow;
