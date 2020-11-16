import React, {
  useState, useCallback, useEffect,
} from 'react';
import Arrow from '../Arrow';
import ButtonScroll from '../ButtonScroll';
import Image from '../ImageGrid';

import {
  MasonryContainer, Grid, ButtonScrollContainer,
} from './styles';

const Masonry: React.FC = () => {
  const [scrollTop, setScrollTop] = useState(false);
  const [countImages, setCountImages] = useState<number[]>([]);

  const handleScroll = useCallback(() => {
    setScrollTop(!scrollTop);
  }, [scrollTop]);

  useEffect(() => {
    const top = scrollTop ? document.body.scrollHeight : 0;
    window.scrollTo({ top, behavior: 'smooth' });
  }, [scrollTop]);

  useEffect(() => {
    const count = [];
    for (let i = 0; i < 10; i += 1) {
      count.push(i);
    }
    setCountImages(count);
  }, []);

  return (
    <MasonryContainer>
      {countImages.map((item) => (
        <Grid key={item}>
          <Image alt="Grid" src={`https://source.unsplash.com/random/${item}`} />
        </Grid>
      ))}
      <ButtonScrollContainer>
        <ButtonScroll onClick={handleScroll}>
          <Arrow up={!scrollTop} />
        </ButtonScroll>
      </ButtonScrollContainer>
    </MasonryContainer>
  );
};

export default Masonry;
