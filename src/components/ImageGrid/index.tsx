import React, { useState } from 'react';

import { Image } from './styles';
import { Props } from './types';

const ImageGrid: React.FC<Props> = ({ src, alt }) => {
  const [onload, setOnload] = useState(false);

  return (
    <Image loaded={onload} onLoad={() => setOnload(true)} src={src} alt={alt} />);
};

export default ImageGrid;
